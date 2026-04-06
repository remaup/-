import React, { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    // Delay loading the heavy 3D iframe to prioritize main content rendering
    const timer = setTimeout(() => {
      setIsIframeLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-slate-950">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full opacity-60">
          {isIframeLoaded && (
            <iframe 
              src='https://my.spline.design/flowingribbon-WzE8CAQn2PDUGAOhXEv4vpcE/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="w-full h-full"
              title="3D Flowing Ribbon"
              loading="lazy"
            ></iframe>
          )}
        </div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] z-10 pointer-events-none"></div>
        
        {/* Subtle Blue Tint */}
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10 pointer-events-none"></div>
        
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-40 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40 text-center">
        
        {/* Scarcity Notice */}
        <RevealOnScroll delay={0.1}>
          <div className="inline-flex items-center justify-center w-full mb-4">
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm flex items-center gap-2">
              <i className="fa-solid fa-bell animate-bounce"></i>
              [공지] 퀄리티 유지를 위해 이번 달 신규 계약은 단 2곳만 추가로 받습니다.
            </div>
          </div>
        </RevealOnScroll>

        {/* Badge */}
        <RevealOnScroll delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md mb-8 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-400 to-sky-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-slate-300">병원 전문 블로그 에이전시</span>
          </div>
        </RevealOnScroll>

        {/* Main Heading */}
        <RevealOnScroll delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white drop-shadow-sm">
            병원 블로그 <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400">리마업이 관리해야 1위가 됩니다</span>
          </h1>
        </RevealOnScroll>

        {/* Sub Heading */}
        <RevealOnScroll delay={0.3}>
          <div className="mb-10 inline-block text-left drop-shadow-md">
            <p className="text-xl md:text-2xl text-white font-bold leading-normal">
              진료만으로도 벅찬 하루, 복잡한 마케팅<br className="md:hidden" />
              고민은 리마업이 끝내드립니다.
            </p>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-normal mt-2">
              원장님의 시간은 환자에게, 병원 블로그는<br className="md:hidden" />
              확실한 전문가에게.<br />
              진료 이외의 모든 고민, 리마업이<br className="md:hidden" />
              완벽히 해결해 드립니다.
            </p>
          </div>
        </RevealOnScroll>

        {/* Trust Badges */}
        <RevealOnScroll delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-handshake-angle text-blue-400"></i>
              <span className="text-sm md:text-base font-bold text-slate-300">기존 원장님 재계약률 92%</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-shield-halved text-blue-400"></i>
              <span className="text-sm md:text-base font-bold text-slate-300">성과 불만족 시 100% 환불 보장</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-scale-balanced text-blue-400"></i>
              <span className="text-sm md:text-base font-bold text-slate-300">의료법 위반 및 환불 0건</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA Buttons */}
        <RevealOnScroll delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <button 
              onClick={scrollToContact}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white font-bold shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              무료 진단 신청하기 <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800/80 border border-slate-700 hover:border-slate-600 text-white font-medium transition-all hover:bg-slate-700 hover:shadow-lg transform hover:-translate-y-1"
            >
              포트폴리오 보기
            </button>
          </div>
        </RevealOnScroll>

        {/* Stats/Social Proof (Floating Cards) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Stat 1 */}
          <RevealOnScroll delay={0.4} className="h-full">
            <div className="glass-card p-8 rounded-2xl text-left animate-float h-full flex flex-col bg-slate-800/50 backdrop-blur-xl border-slate-700 shadow-xl" style={{ animationDelay: '0s' }}>
              <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <i className="fa-solid fa-map-location-dot text-xl text-blue-400"></i>
              </div>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 mb-2">1:1</h3>
              <p className="text-lg font-bold text-white mb-4">지역별 진료 과목 독점</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                원장님의 병원 성장에만 온전히 집중하기 위해, 동일 지역 내 같은 진료 과목 병원은 추가로 계약하지 않습니다.
              </p>
            </div>
          </RevealOnScroll>

          {/* Stat 2 */}
          <RevealOnScroll delay={0.6} className="h-full">
            <div className="glass-card p-8 rounded-2xl text-left animate-float h-full flex flex-col bg-slate-800/50 backdrop-blur-xl border-slate-700 shadow-xl" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <i className="fa-solid fa-handshake text-xl text-sky-400"></i>
              </div>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300 mb-2">92%</h3>
              <p className="text-lg font-bold text-white mb-4">압도적인 재계약률</p>
              <p className="text-sm text-slate-400 leading-relaxed break-keep">
                단순 노출이 아닌 실제 병원 매출 상승을 경험한 원장님들의 선택이<br />리마업의 실력을 증명합니다.
              </p>
            </div>
          </RevealOnScroll>

          {/* Stat 3 */}
          <RevealOnScroll delay={0.8} className="h-full">
            <div className="glass-card p-8 rounded-2xl text-left animate-float h-full flex flex-col bg-slate-800/50 backdrop-blur-xl border-slate-700 shadow-xl" style={{ animationDelay: '4s' }}>
              <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <i className="fa-solid fa-scale-balanced text-xl text-indigo-400"></i>
              </div>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 mb-2">Zero</h3>
              <p className="text-lg font-bold text-white mb-4">의료법 위반 리스크</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                모든 콘텐츠는 보건소 소명 걱정 없이 의료법<br />
                가이드라인을 완벽히 준수하여<br />
                안전하게 작성됩니다.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;