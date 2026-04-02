import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "베이직",
      postCount: "월 8회",
      price: "320,000",
      popular: false,
      features: [
        "핵심키워드 추출/분석",
        "콘텐츠 기획",
        "클린 IP",
        "월말 성과 보고서",
        "전담 매니저 소통"
      ]
    },
    {
      name: "스탠다드",
      postCount: "월 12회",
      price: "460,000",
      popular: true,
      features: [
        "핵심키워드 추출/분석",
        "콘텐츠 기획",
        "전문 디자인 제작",
        "클린 IP",
        "월말 성과 보고서",
        "홈페이지형 블로그 스킨 제작",
        "전담 매니저 소통"
      ]
    },
    {
      name: "프리미엄",
      postCount: "월 16회",
      price: "640,000",
      popular: false,
      features: [
        "핵심키워드 추출/분석",
        "콘텐츠 기획",
        "전문 디자인 제작",
        "클린 IP",
        "월말 성과 보고서",
        "홈페이지형 블로그 스킨 제작",
        "전담 매니저 소통"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <RevealOnScroll>
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-3 block">Pricing Plan</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
              투명하고 합리적인 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">가격 정책</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              거품을 뺀 비용으로 최고의 마케팅 효율을 경험하세요.<br className="hidden md:block" />
              모든 플랜에는 고품질 콘텐츠 기획과 전담 매니저 관리가 포함됩니다.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div 
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 bg-white text-slate-900 shadow-xl shadow-slate-200/50 border ${
                  plan.popular 
                    ? 'border-blue-400 md:-mt-8 md:mb-8 shadow-blue-900/10' 
                    : 'border-slate-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg tracking-wide border border-blue-400/30">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8 mt-2">
                  <h3 className="text-xl font-bold mb-2 text-blue-600">{plan.name}</h3>
                  <div className="text-sm font-medium mb-6 px-4 py-1.5 rounded-full inline-block bg-slate-100 text-slate-600">
                    포스팅 {plan.postCount}
                  </div>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="mb-2 font-medium text-slate-500">원/월</span>
                  </div>
                  <p className="text-xs mt-3 font-medium text-slate-400">* 부가세(VAT) 포함</p>
                </div>

                <div className="h-px w-full mb-8 bg-slate-100"></div>

                <div className="flex-grow">
                  <p className="text-sm font-bold mb-6 text-slate-900">제공 서비스</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-blue-50 text-blue-600">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                  >
                    상담 신청하기
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
