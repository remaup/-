import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              환자는 예쁜 디자인이 아니라<br />
              <span className="text-gradient">'내 고민을 해결해 줄 병원을 찾습니다'</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-500 mx-auto rounded-full shadow-sm"></div>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <RevealOnScroll className="order-2 md:order-1">
            <div className="glass-card p-8 rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="mb-8">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-2 font-medium">
                  단순한 정보 나열은 의미가 없습니다.
                </p>
                <p className="text-2xl md:text-3xl font-bold leading-tight text-slate-900">
                  환자의 <span className="text-gradient drop-shadow-sm">결핍을 건드리는 기획</span>이 필요합니다.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-file-shield text-blue-600 text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gradient mb-3">불안감 해소 (Pain Point)</h4>
                    <p className="text-slate-600 text-base leading-relaxed">
                      환자가 병원을 선택하기 전 망설이는<br className="md:hidden" /> 진짜 이유를 파악합니다.<br/>
                      부작용, 통증, 비용에 대한 걱정을<br/>
                      원장님만의 진료 철학으로 안심시킵니다.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-heart-circle-check text-sky-600 text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gradient mb-3">확실한 차별화 (Differentiation)</h4>
                    <p className="text-slate-600 text-base leading-relaxed">
                      '친절합니다', '최신 장비가 있습니다'는<br className="md:hidden" /> 모든 병원이 하는 말입니다.<br/>
                      <strong className="text-slate-900">우리 병원만이 줄 수 있는 가치(USP)를<br className="md:hidden" /> 발굴하여 환자를 설득합니다.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Visual: Growth Graph Card (Light Theme Version) */}
          <RevealOnScroll className="order-1 md:order-2 relative" delay={0.2}>
             {/* Card Container */}
             <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100/50 blur-[60px] rounded-full pointer-events-none"></div>

                {/* Main Light Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden border border-slate-200 ring-1 ring-slate-100">
                    
                    {/* Header */}
                    <div className="mb-8 relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-2 tracking-tight">
                            기획이 바뀌면 전환율이 달라집니다.
                        </h3>
                        <p className="text-slate-500 text-sm md:text-base font-medium">
                            A 성형외과, 기획 변경 후 신규 환자 259% 증가
                        </p>
                    </div>

                    {/* Graph Area */}
                    <div className="relative h-[320px] w-full bg-slate-50 rounded-2xl border border-slate-100 shadow-inner p-4 md:p-6">
                        {/* Grid Lines (Dashed) */}
                        <div className="absolute left-6 right-6 top-10 bottom-12 flex flex-col justify-between pointer-events-none z-0">
                            <div className="w-full border-t border-dashed border-slate-200"></div>
                            <div className="w-full border-t border-dashed border-slate-200"></div>
                            <div className="w-full border-t border-dashed border-slate-200"></div>
                            <div className="w-full border-t border-dashed border-slate-200"></div>
                        </div>

                        {/* Y-Axis Labels */}
                        <div className="absolute left-2 top-10 bottom-12 flex flex-col justify-between text-[10px] text-slate-400 font-medium">
                            <span>210</span>
                            <span>170</span>
                            <span>130</span>
                            <span>90</span>
                        </div>

                        {/* Graph SVG */}
                        <div className="absolute inset-0 top-10 bottom-12 left-8 right-8">
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="redGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                                
                                {/* Area Fill */}
                                <path d="M0,90 L50,55 L100,20 V100 H0 Z" fill="url(#redGradient)" />
                                
                                {/* Line */}
                                <path d="M0,90 L50,55 L100,20" fill="none" stroke="#ef4444" strokeWidth="3" filter="url(#glow)" strokeLinecap="round" strokeLinejoin="round" />
                                
                                {/* Points */}
                                <circle cx="0" cy="90" r="4" fill="#ef4444" stroke="white" strokeWidth="2" />
                                <circle cx="50" cy="55" r="4" fill="#ef4444" stroke="white" strokeWidth="2" />
                                <circle cx="100" cy="20" r="4" fill="#ef4444" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </div>
             </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
