import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Process: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: '정밀 진단',
      desc: <>병원의 현재 상황과 경쟁사를<br className="md:hidden" /> 데이터를 기반으로 분석합니다.</>,
      icon: 'fa-magnifying-glass-chart',
    },
    {
      id: '02',
      title: '맞춤 전략',
      desc: <>우리 병원만의 차별점(USP)을 찾아내어<br className="md:hidden" /> 최적의 키워드를 선정합니다.</>,
      icon: 'fa-chess-board',
    },
    {
      id: '03',
      title: '안전 실행',
      desc: <>의료법 전문 마케터가 가이드라인을<br className="md:hidden" /> 준수하며 콘텐츠를 제작합니다.</>,
      icon: 'fa-pen-to-square',
    },
    {
      id: '04',
      title: '성과 보고',
      desc: <>매월 투명한 데이터 리포트로<br className="md:hidden" /> 성장을 증명합니다.</>,
      icon: 'fa-file-invoice-dollar',
    }
  ];

  return (
    <section className="py-20 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">체계적인 <span className="text-gradient">마케팅 프로세스</span></h2>
            <p className="text-slate-500">성공적인 마케팅을 위한 4단계 로드맵</p>
          </RevealOnScroll>
        </div>

        <div className="relative mb-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-sky-100 to-blue-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col items-center group hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-2xl font-bold text-blue-600 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300 shadow-sm">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-bold text-gradient mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed break-keep">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={0.4}>
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              모든 과정은 <span className="text-blue-600">투명하게 공유</span>됩니다
            </h3>
            <ul className="text-slate-600 text-sm space-y-2 mb-6 inline-block text-left">
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-blue-500"></i> 소통 채널: 카카오톡 단체방 및 유선 전화 (상시 대기)</li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-blue-500 mt-1"></i> 
                <span>
                  작업 소요 시간: 결제 후 영업일<br className="md:hidden" />
                  기준 3일 이내 초안 전달
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-blue-500 mt-1"></i> 
                <span>
                  수정 횟수: 원장님<br className="md:hidden" />
                  컨펌 완료 시까지<br className="md:hidden" />
                  <strong>무제한 무상<br className="md:hidden" />
                  수정</strong>
                </span>
              </li>
            </ul>
            
            <div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                지금 바로 프로세스 시작하기 <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Process;
