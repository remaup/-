import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateAndSaveImage(prompt: string, filename: string) {
  console.log(`Generating image for: ${prompt}`);
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        fs.writeFileSync(path.join(process.cwd(), 'public', filename), buffer);
        console.log(`Saved ${filename}`);
        return;
      }
    }
    console.log(`No image data found for ${filename}`);
  } catch (e) {
    console.error(`Failed to generate ${filename}:`, e);
  }
}

async function main() {
  await generateAndSaveImage('A clean, modern orthopedic clinic interior, bright lighting, professional medical environment, high quality, realistic', 'ortho.png');
  await generateAndSaveImage('A luxurious plastic surgery clinic reception area, elegant design, marble floors, warm lighting, high quality, realistic', 'plastic.png');
  await generateAndSaveImage('A premium dermatology clinic treatment room, advanced laser equipment, clean white and beige tones, high quality, realistic', 'derma.png');
  await generateAndSaveImage('A modern dental clinic interior, high-tech dental chair, bright and clean environment, reassuring atmosphere, high quality, realistic', 'dental.png');
  await generateAndSaveImage('A traditional yet modern oriental medicine clinic, warm wood interior, calming atmosphere, herbal medicine drawers in background, high quality, realistic', 'oriental.png');
  await generateAndSaveImage('A cozy and comforting psychology clinic consulting room, warm lighting, comfortable sofa, peaceful atmosphere, high quality, realistic', 'psych.png');
}

main();
