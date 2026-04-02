import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      id: 1,
      quote: "우리 병원이 가벼워 보이면 어떡하지?",
      category: "톤앤매너와 신뢰도 하락",
      solutionTitle: "리마업의 해결책",
      solution: "공장형 포스팅을 철저히 배제하고, 원장님의 진료 철학이 담긴 '신뢰감 있는 부드러운 톤앤매너'를 일관되게 유지합니다.",
      icon: "fa-face-frown-open",
      colorClasses: { bg: "bg-rose-50", text: "text-rose-600" }
    },
    {
      id: 2,
      quote: "실제 실력이 있는 진짜 전문가가 맞나?",
      category: "비전문가의 겉핥기식 포스팅",
      solutionTitle: "리마업의 해결책",
      solution: "인터넷 짜깁기가 아닌, 마케팅 전문 기업 출신 마케터가 병원만의 고유한 차별점과 전문성을 깊이 있게 분석하여 글을 작성합니다.",
      icon: "fa-user-doctor",
      colorClasses: { bg: "bg-blue-50", text: "text-blue-600" }
    },
    {
      id: 3,
      quote: "의료법 위반으로 보건소에서 연락 오면 어떡하지?",
      category: "법적 리스크 관리",
      solutionTitle: "리마업의 해결책",
      solution: "까다로운 의료광고법 가이드라인을 엄격하게 준수하면서도, 환자의 마음을 움직이는 합법적이고 안전한 설득의 마케팅을 진행합니다.",
      icon: "fa-scale-balanced",
      colorClasses: { bg: "bg-amber-50", text: "text-amber-600" }
    },
    {
      id: 4,
      quote: "결국 돈만 날리고 흐지부지되는 거 아닐까?",
      category: "책임감과 지속성",
      solutionTitle: "리마업의 해결책",
      solution: "압도적인 재계약률(90% 이상)이 증명합니다. 계약 후에도 변함없는 소통과 투명한 성과 보고로 끝까지 책임지는 파트너가 되겠습니다.",
      icon: "fa-handshake-angle",
      colorClasses: { bg: "bg-emerald-50", text: "text-emerald-600" }
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
              원장님들의 진짜 고민
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
              대행사 선택, <br className="md:hidden" />
              <span className="text-gradient">이런 점들이 불안하셨죠?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              수많은 원장님들을 만나며 들었던 진짜 고민들, <br className="hidden md:block" />
              리마업은 그 불안감을 완벽한 확신으로 바꾸어 드립니다.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <RevealOnScroll key={point.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                <div className="flex items-start gap-4 mb-6 flex-grow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${point.colorClasses.bg} ${point.colorClasses.text} group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fa-solid ${point.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <span className={`text-sm font-bold ${point.colorClasses.text} mb-1 block`}>
                      {point.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      "{point.quote}"
                    </h3>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <i className="fa-solid fa-check text-blue-600 text-xs"></i>
                    </div>
                    <strong className="text-slate-900 text-sm">{point.solutionTitle}</strong>
                  </div>
                  <p className="text-blue-700 text-sm font-medium leading-relaxed pl-8">
                    {point.solution}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
