import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Services: React.FC = () => {
  return (
    <section id="service" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <span className="text-gradient font-bold tracking-wider text-sm uppercase">Why 리마업?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900">리마업, 3가지는 <span className="text-gradient">약속합니다.</span></h2>
            <p className="text-slate-500">고객이 가장 원하는 가치에만 집중하겠습니다.</p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Safety First */}
          <RevealOnScroll delay={0.1}>
            <div className="group h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 blur-[50px] rounded-full pointer-events-none group-hover:bg-blue-100 transition-colors"></div>
              
              <div className="relative mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                {/* Icon Background Glow */}
                <div className="absolute inset-0 bg-blue-100 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* 3D Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-blue-100 flex items-center justify-center shadow-md relative z-10 group-hover:border-blue-200 transition-colors">
                  <i className="fa-solid fa-scale-balanced text-3xl text-blue-500"></i>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gradient">Safety First</h3>
              <div className="w-10 h-0.5 bg-blue-200 mb-4 rounded-full"></div>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                <strong className="text-slate-900">의료광고법 준수율 100%, 이것이 목표입니다.</strong><br />
                보건소 소명 걱정은 덜어내세요.<br />
                안전한 원고 작성이 최우선 원칙입니다.
              </p>
              
              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mr-3 border border-blue-100">
                    <i className="fa-solid fa-check text-[10px] text-blue-500"></i>
                  </div>
                  의료법 가이드라인 준수
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mr-3 border border-blue-100">
                    <i className="fa-solid fa-shield-halved text-[10px] text-blue-500"></i>
                  </div>
                  리스크 사전 차단
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 2: Hyper Speed */}
          <RevealOnScroll delay={0.2}>
            <div className="group h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 blur-[50px] rounded-full pointer-events-none group-hover:bg-sky-100 transition-colors"></div>

              <div className="relative mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                {/* Icon Background Glow */}
                <div className="absolute inset-0 bg-sky-100 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* 3D Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-sky-100 flex items-center justify-center shadow-md relative z-10 group-hover:border-sky-200 transition-colors">
                  <i className="fa-solid fa-bolt-lightning text-3xl text-sky-500"></i>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gradient">Hyper Speed</h3>
              <div className="w-10 h-0.5 bg-sky-200 mb-4 rounded-full"></div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                <strong className="text-slate-900">문제가 생기면 즉각 조치합니다.</strong><br />
                관리자가 즉시 확인 후 바로 대응합니다.<br />
                빠른 소통을 원칙으로 하고 있습니다.
              </p>

              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center mr-3 border border-sky-100">
                    <i className="fa-regular fa-clock text-[10px] text-sky-500"></i>
                  </div>
                  즉각 피드백
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center mr-3 border border-sky-100">
                    <i className="fa-solid fa-rotate text-[10px] text-sky-500"></i>
                  </div>
                  실시간 수정 반영
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 3: Real Expertise */}
          <RevealOnScroll delay={0.3}>
            <div className="group h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 blur-[50px] rounded-full pointer-events-none group-hover:bg-indigo-100 transition-colors"></div>

              <div className="relative mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                {/* Icon Background Glow */}
                <div className="absolute inset-0 bg-indigo-100 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* 3D Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-indigo-100 flex items-center justify-center shadow-md relative z-10 group-hover:border-indigo-200 transition-colors">
                  <i className="fa-solid fa-chart-pie text-3xl text-indigo-500"></i>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gradient">Real Expertise</h3>
              <div className="w-10 h-0.5 bg-indigo-200 mb-4 rounded-full"></div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                <strong className="text-slate-900">병원 블로그만 연구했습니다.</strong><br />
                일반 마케팅과는 접근부터 다릅니다.<br />
                전문적인 분석으로 성과를 만듭니다.
              </p>

              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center mr-3 border border-indigo-100">
                    <i className="fa-solid fa-magnifying-glass-chart text-[10px] text-indigo-500"></i>
                  </div>
                  경쟁사 정밀 분석
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center mr-3 border border-indigo-100">
                    <i className="fa-solid fa-bullseye text-[10px] text-indigo-500"></i>
                  </div>
                  타깃 맞춤 전략
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Services;
