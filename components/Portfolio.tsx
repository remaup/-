import React, { useEffect, useState, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { GoogleGenAI } from "@google/genai";

const Portfolio: React.FC = () => {
  // 1. Fallback Images: 즉시 로딩되는 기본 이미지 (AI 생성 전 표시)
  const fallbackImages: { [key: string]: string } = {
    'ortho': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop', 
    'plastic': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop', 
    'derma': 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop', 
    'dental': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop', 
    'oriental': 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop',
    'psych': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
  };

  const [bgImages, setBgImages] = useState<{ [key: string]: string }>(fallbackImages);

  // 성공 사례 데이터 (고객사의 권위 빌려오기 적용)
  const cases = [
    {
      id: 'ortho',
      category: '마포구 매출 1위 *** 정형외과',
      tag: '지역 1위',
      title: '지역 키워드, 점유율 1위 달성',
      desc: '의료법 준수 원고 3개월 차입니다. 신환 유입이 150% 늘었습니다.',
      color: 'blue'
    },
    {
      id: 'plastic',
      category: '압구정 재방문율 1위 ***** 성형외과',
      tag: '매출 상승',
      title: '브랜딩 블로그, 전환율 최적화',
      desc: '이전 대행사보다 낫습니다. 재방문율이 2배나 올랐습니다.',
      color: 'indigo'
    },
    {
      id: 'derma',
      category: '청담동 연예인 단골 **** 피부과',
      tag: '리스크 제로',
      title: '보건소 민원 0건 안전한 운영',
      desc: '까다로운 피부과 키워드도 잡았습니다. 물론 무사고입니다.',
      color: 'sky'
    },
    {
      id: 'dental',
      category: '여의도 직장인 선호도 1위 ** 치과',
      tag: '문의 폭주',
      title: '임플란트 문의 200% 증가',
      desc: '고가 시술 문의가 눈에 띄게 늘었습니다. 비용 대비 효율 최고입니다.',
      color: 'blue'
    },
    {
      id: 'oriental',
      category: '송파구 교통사고 입원율 1위 ****** 한의원',
      tag: '특화 진료',
      title: '교통사고/다이어트 환자 유입 1위',
      desc: '동네 한의원에서 지역 대표 한의원으로 성장했습니다.',
      color: 'sky'
    },
    {
      id: 'psych',
      category: '판교 예약 대기 1개월 * 정신건강의학과',
      tag: '신뢰 구축',
      title: '초진 예약률 98% 달성',
      desc: '환자분들이 블로그 글을 보고 신뢰를 느껴서 찾아옵니다.',
      color: 'indigo'
    }
  ];

  // Infinite Scroll을 위해 배열을 두 번 복사
  const duplicatedCases = [...cases, ...cases];

  // Scroll Refs & State for Drag-to-Scroll
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0); // High precision scroll position
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Initialize accumulator
    scrollPosRef.current = container.scrollLeft;

    let animationId: number;
    const autoScroll = () => {
      if (!isDragging) {
        // Slower speed: 0.5px per frame
        scrollPosRef.current += 0.5;
        
        // Reset if reached halfway (infinite loop logic)
        if (scrollPosRef.current >= container.scrollWidth / 2) {
          scrollPosRef.current = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPosRef.current;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };
    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const onDragStart = (pageX: number) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(pageX - scrollRef.current.offsetLeft);
    setStartScrollLeft(scrollRef.current.scrollLeft);
    // Sync ref to current position to prevent jump on resume
    scrollPosRef.current = scrollRef.current.scrollLeft;
  };

  const onDragEnd = () => {
    setIsDragging(false);
    if (scrollRef.current) {
        scrollPosRef.current = scrollRef.current.scrollLeft;
    }
  };

  const onDragMove = (pageX: number) => {
    if (!isDragging || !scrollRef.current) return;
    const x = pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = startScrollLeft - walk;
    scrollPosRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseDown = (e: React.MouseEvent) => onDragStart(e.pageX);
  const handleMouseUp = onDragEnd;
  const handleMouseLeave = onDragEnd;
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      onDragMove(e.pageX);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => onDragStart(e.touches[0].pageX);
  const handleTouchEnd = onDragEnd;
  const handleTouchMove = (e: React.TouchEvent) => onDragMove(e.touches[0].pageX);

  useEffect(() => {
    const generateImages = async () => {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        console.log("API Key not found, using fallback images.");
        return;
      }

      const ai = new GoogleGenAI({ apiKey });

      const definitions = [
        {
          id: 'ortho',
          prompt: 'Wide angle view of a modern Orthopedic clinic waiting room. Clean white and blue interior design, professional medical atmosphere, reception desk, bright lighting. No people. 8k resolution, photorealistic.'
        },
        {
          id: 'plastic',
          prompt: 'Wide angle view of a luxurious Plastic Surgery clinic lobby. Marble floors, elegant beige sofa, gold accents, high-end hotel style interior, soft warm lighting. No people. 8k resolution, photorealistic.'
        },
        {
          id: 'derma',
          prompt: 'Wide angle view of a Dermatology clinic treatment room. Advanced medical laser equipment, pristine white bed, clean and sterile environment, professional doctor office. No nature, no plants. 8k resolution, photorealistic.'
        },
        {
          id: 'dental',
          prompt: 'Wide angle view of a modern Dental clinic exam room. Dental chair, large window with city view, clean white and mint interior, medical equipment. 8k resolution, photorealistic.'
        },
        {
          id: 'oriental',
          prompt: 'Interior view of a clean Korean Oriental Medicine Clinic. Wall full of traditional wooden drawers (herbal medicine cabinets), warm wood tones, soft healing lighting, professional medical facility. No people. 8k resolution, photorealistic.'
        },
        {
          id: 'psych',
          prompt: 'Interior view of a private Psychiatry Clinic consultation room. Two comfortable beige armchairs facing each other for therapy, warm floor lamp, bookshelf, cozy atmosphere. No people, no cameras. 8k resolution, photorealistic.'
        }
      ];

      definitions.forEach(async (def) => {
        try {
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: def.prompt }] },
            config: {
              imageConfig: {
                aspectRatio: "16:9", 
              }
            }
          });

          const parts = response.candidates?.[0]?.content?.parts;
          if (parts) {
            for (const part of parts) {
              if (part.inlineData && part.inlineData.data) {
                 const base64Image = `data:image/png;base64,${part.inlineData.data}`;
                 setBgImages(prev => ({ ...prev, [def.id]: base64Image }));
                 break; 
              }
            }
          }
        } catch (e) {
          console.warn(`Failed to generate image for ${def.id}, keeping fallback.`);
        }
      });
    };

    generateImages();
  }, []);

  const getColorClasses = (color: string) => {
    const colors: {[key: string]: string} = {
      blue: 'from-blue-600 to-blue-400',
      violet: 'from-indigo-600 to-indigo-400', // Mapped to indigo
      indigo: 'from-indigo-600 to-indigo-400',
      cyan: 'from-sky-600 to-sky-400', // Mapped to sky
      sky: 'from-sky-600 to-sky-400',
      emerald: 'from-blue-500 to-sky-400', // Mapped to blue-sky mix
    };
    return colors[color] || colors['blue'];
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        {/* Adjusted Layout: Centered on mobile, Row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left">
          <RevealOnScroll>
            <span className="text-gradient font-bold tracking-wider text-sm uppercase mb-2 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
              리마업<span className="md:hidden"><br/></span><span className="hidden md:inline">, </span><span className="text-gradient">결과로 증명합니다</span>
            </h2>
            <p className="text-slate-500 text-lg">
                단순 노출은 의미 없습니다.<br className="md:hidden" /> 병원의 실질적인 매출 성장을 만듭니다.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <button className="mt-8 md:mt-0 px-8 py-3 rounded-full border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-slate-700 font-medium flex items-center gap-3 group backdrop-blur-sm mx-auto md:mx-0 shadow-sm">
              전체 사례 보기 <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </RevealOnScroll>
        </div>
      </div>

      {/* Draggable Infinite Rolling Banner */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none"></div>

        {/* Scrollable Container replacing CSS animation */}
        <div 
          ref={scrollRef}
          className="flex w-full overflow-hidden py-8 cursor-grab active:cursor-grabbing"
          style={{ touchAction: 'pan-y' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {duplicatedCases.map((item, index) => (
            <div key={`${item.id}-${index}`} className="w-[85vw] sm:w-[380px] md:w-[420px] mx-3 md:mx-5 flex-shrink-0 select-none">
              <div className="glass-card rounded-2xl overflow-hidden group cursor-pointer h-full hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 border border-slate-200 relative bg-white">
                
                {/* Image Area with Overlay */}
                <div className="h-52 md:h-64 bg-slate-100 relative overflow-hidden pointer-events-none">
                   {/* Background Image */}
                   <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${bgImages[item.id]})` }}
                   ></div>
                   
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-90"></div>
                  
                  <div className="absolute top-6 left-6 z-10">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getColorClasses(item.color)} shadow-lg`}>
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Text Content Area */}
                <div className="p-6 md:p-8 relative -mt-12 bg-transparent z-10 pointer-events-none">
                   <div className="mb-3">
                     <span className="text-blue-600 font-bold text-sm mb-1 block">{item.category}</span>
                     <h4 className="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                       {item.title}
                     </h4>
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 mt-4">
                     {item.desc}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
