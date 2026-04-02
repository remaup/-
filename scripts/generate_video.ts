import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateVideo() {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is not set");
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey });

  console.log("Starting video generation...");
  
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: 'A professional Korean hospital director in a white coat giving an interview in a modern hospital office. Shallow depth of field, 4k, cinematic lighting. He is nodding and speaking naturally.',
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    console.log("Video generation started. Polling for completion...");

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({operation: operation});
      console.log("Still processing...");
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) {
      console.error("No video URI returned");
      process.exit(1);
    }

    console.log("Video generated successfully. Downloading from:", videoUri);

    const response = await fetch(videoUri, {
      method: 'GET',
      headers: {
        'x-goog-api-key': apiKey,
      },
    });

    if (!response.ok) {
      console.error(`Failed to download video: ${response.statusText}`);
      process.exit(1);
    }

    const buffer = await response.arrayBuffer();
    const outputPath = path.resolve(__dirname, '../public/hero-bg.mp4');
    
    // Ensure public directory exists
    const publicDir = path.dirname(outputPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, Buffer.from(buffer));
    console.log(`Video saved to ${outputPath}`);

  } catch (error) {
    console.error("Error generating video:", error);
    process.exit(1);
  }
}

generateVideo();
