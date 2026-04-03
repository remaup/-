import React, { useEffect, useState, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';

const Portfolio: React.FC = () => {
  // 1. Fallback Images: 즉시 로딩되는 기본 이미지
  const fallbackImages: { [key: string]: string } = {
    'ortho': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop', 
    'plastic': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop', 
    'derma': 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop', 
    'dental': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop', 
    'oriental': 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop',
    'psych': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
  };

  const [bgImages] = useState<{ [key: string]: string }>(fallbackImages);

  // 성공 사례 데이터 (고객사의 권위 빌려오기 적용)
  const cases = [
    {
      id: 'ortho',
      category: '마포구 매출 1위 *** 정형외과',
      tag: '지역 1위',
      title: '상세한 분석과 투명한 피드백',
      desc: '현재 세달이상 계속 이어서 블로그관리 진행하고있어요 만족스러우니 연장하고있겠죠? 한달관리가 종료되면 ppt로 상세한 분석과 노출결과 등 다양한 피드백도 주셔서 좋은거같아요! 앞으로도 잘부탁드려요!',
      color: 'blue'
    },
    {
      id: 'plastic',
      category: '압구정 재방문율 1위 ***** 성형외과',
      tag: '매출 상승',
      title: '시술에 대한 완벽한 이해도',
      desc: '꼼꼼하게 관리해주세요. 병원에서 하는 시술에 대해서 이해도 하지 못한채 짜집기하듯 글쓰는 업체들도 많은데 써주신 글을 보면 시술에 대해서 잘 이해해서 쓴 글이라는 생각이 들어서 너무 만족하고 있습니다. 매일매일 업로드 하는 포스팅을 보내주셔서 따로 확인하지 않아도 되고 관리 너무 잘해주시는것 같아요~ ^^',
      color: 'indigo'
    },
    {
      id: 'derma',
      category: '청담동 연예인 단골 **** 피부과',
      tag: '리스크 제로',
      title: '진심이 느껴지는 든든한 파트너',
      desc: '개원 초반에 마케팅 사기를 당해서 안 좋은 기억이 있었는데, 리마업과의 계약을 망설였던 시간들이 후회될 뿐입니다. 정말 병원이 잘됐으면 하는 마음을 담아서 일해주시는게 너무나 느껴집니다. 언제 연락해도 친절히 응대해주시는 모습에 믿음이 더욱 쌓여갑니다! 앞으로도 좋은 동반자 관계를 계속 유지하고 싶습니다.',
      color: 'sky'
    },
    {
      id: 'dental',
      category: '여의도 직장인 선호도 1위 ** 치과',
      tag: '문의 폭주',
      title: '원장보다 병원을 더 잘 아는 곳',
      desc: '원장인 저보다 저희 치과 장점을 더 잘 파악해서 써주시는 것 같아요. 환자분들이 블로그 보고 오셨다면서 글에서 본 내용을 먼저 물어보실 때마다 진짜 신기합니다. 공장형으로 찍어내는 곳들이랑은 퀄리티 자체가 다릅니다. 진작 맡길 걸 그랬어요.',
      color: 'blue'
    },
    {
      id: 'oriental',
      category: '송파구 교통사고 입원율 1위 ****** 한의원',
      tag: '특화 진료',
      title: '대기실이 꽉 차는 확실한 효과',
      desc: '처음엔 반신반의하면서 시작했는데, 매달 꼼꼼하게 피드백 주시고 카톡으로 바로바로 소통해주셔서 지금은 전적으로 믿고 맡깁니다. 요즘 대기실이 꽉 차서 데스크 직원들이 바쁘다고 투정부릴 정도네요 ㅎㅎ 항상 신경써주셔서 감사합니다.',
      color: 'sky'
    },
    {
      id: 'psych',
      category: '판교 예약 대기 1개월 * 정신건강의학과',
      tag: '신뢰 구축',
      title: '원장의 진료 철학을 담은 글',
      desc: '진료 과목 특성상 글의 뉘앙스가 정말 중요한데, 제 진료 철학을 글에 그대로 녹여내주셔서 놀랐습니다. 환자분들도 블로그 글에서 진정성이 느껴져서 용기 내서 찾아왔다고 많이들 말씀하시네요. 단순 광고가 아니라 진짜 소통하는 느낌이라 너무 좋습니다.',
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
            <p className="text-slate-500 text-lg mb-4">
                단순 노출은 의미 없습니다.<br className="md:hidden" /> 병원의 실질적인 매출 성장을 만듭니다.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              조작없는 실제 구매자가 작성한 100% 클린리뷰입니다.
            </div>
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
