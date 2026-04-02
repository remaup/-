import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-blue-50/50 via-sky-50/50 to-transparent -translate-y-1/2 -skew-y-3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">왜 <span className="text-gradient">리마업</span>이어야 할까요?</h2>
            <p className="text-slate-500">원장님들의 진짜 고민(Pain Point)을 해결하는 차별화된 솔루션</p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Others */}
          <RevealOnScroll>
            <div className="h-full p-8 rounded-2xl border border-slate-200 bg-slate-50 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-bold text-slate-500 mb-6 text-center">일반 마케팅 대행사</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-500">
                  <i className="fa-solid fa-xmark mt-1 text-red-500"></i>
                  <span>상위노출만 되고 실제 내원(매출)으로는 이어지지 않는 공장식 원고</span>
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <i className="fa-solid fa-xmark mt-1 text-red-500"></i>
                  <span>의료법 위반으로 인한 영업정지 및 벌금 리스크 방치</span>
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <i className="fa-solid fa-xmark mt-1 text-red-500"></i>
                  <span>결제 후 연락이 두절되거나 피드백이 하루 이상 걸림</span>
                </li>
                <li className="flex items-start gap-3 text-slate-500">
                  <i className="fa-solid fa-xmark mt-1 text-red-500"></i>
                  <span>담당자가 자주 바뀌어 매번 병원 상황을 다시 설명해야 함</span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Remarkup */}
          <RevealOnScroll delay={0.2}>
            <div className="h-full p-8 rounded-2xl border border-blue-200 bg-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              <h3 className="text-xl font-bold text-gradient mb-6 text-center flex items-center justify-center gap-2">
                <i className="fa-solid fa-check text-blue-600"></i> 리마업 마케팅
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <i className="fa-solid fa-circle-check mt-1 text-blue-600"></i>
                  <span className="font-medium">원장님의 진료 철학을 담아 실제 환자의 내원(전환율)을 이끌어내는 기획</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <i className="fa-solid fa-circle-check mt-1 text-blue-600"></i>
                  <span className="font-medium">의료법 전문 검수팀의 3중 필터링으로 법적 리스크 원천 차단</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <i className="fa-solid fa-circle-check mt-1 text-blue-600"></i>
                  <span className="font-medium">전담 매니저 1:1 배정으로 업무 시간 내 1시간 이내 즉각 피드백</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <i className="fa-solid fa-circle-check mt-1 text-blue-600"></i>
                  <span className="font-medium">단순 노출이 아닌, 병원 매출 상승에 직결되는 고효율 키워드 발굴 및 관리</span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Comparison;