import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const WhyRemarkup: React.FC = () => {
  const features = [
    {
      title: "Safety First",
      subtitle: "의료광고법 준수율 100% 이것이 목표입니다",
      desc: "보건소 소명 걱정은 덜어내세요. 안전한 원고 작성이 최우선 원칙입니다.",
      points: ["의료법 가이드라인 준수", "리스크 사전 차단"],
      icon: "fa-shield-virus",
      color: "blue"
    },
    {
      title: "Hyper Speed",
      subtitle: "문제가 생기면 즉각 조치합니다",
      desc: "관리자가 즉시 확인 후 바로 대응합니다. 빠른 소통을 원칙으로 하고 있습니다.",
      points: ["0시간 내 피드백", "실시간 수정 반영"],
      icon: "fa-bolt",
      color: "yellow"
    },
    {
      title: "Real Expertise",
      subtitle: "병원 블로그만 연구했습니다",
      desc: "일반 마케팅과는 접근부터 다릅니다. 전문적인 분석으로 성과를 만듭니다.",
      points: ["경쟁사 정밀 분석", "타겟 맞춤 전략"],
      icon: "fa-brain",
      color: "indigo"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why 리마업?</h2>
            <p className="text-xl text-slate-600">
              리마업, <span className="text-blue-600 font-bold">3가지는 약속합니다</span><br />
              <span className="text-sm text-slate-500 mt-2 block">고객이 가장 원하는 가치에만 집중하겠습니다</span>
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl bg-${feature.color}-50 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{feature.subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {feature.desc}
                </p>

                <div className="space-y-2 pt-6 border-t border-slate-100">
                  {feature.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <i className="fa-solid fa-check text-green-500 text-xs"></i>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyRemarkup;
