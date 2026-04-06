import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-700 group-hover:text-slate-900'}`}>
          <span className="text-gradient mr-4 font-bold">Q.</span>
          {question}
        </span>
        <i className={`fa-solid fa-chevron-down text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <div className="text-slate-600 pl-10 leading-relaxed text-sm md:text-base bg-slate-50 p-4 rounded-lg">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "2026년인 지금, 유튜브·인스타 시대에 굳이 네이버 블로그를 해야 하나요?",
      answer: (
        <div className="space-y-4">
          <p className="font-bold text-slate-800 text-base">
            <span className="text-blue-600 block mb-1">신환 유입 1위 채널</span>
            네, 블로그는 여전히 병원 마케팅의 본진입니다.
          </p>

          <div className="space-y-2">
            <strong className="text-slate-800 block border-b border-slate-100 pb-1">왜 블로그인가</strong>
            <ul className="space-y-2 text-sm text-slate-600 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <li className="flex items-start gap-2"><i className="fa-solid fa-check text-blue-500 mt-1"></i> <span><strong>유튜브·인스타그램</strong>은 휘발성이 강하고 트렌드에 민감</span></li>
              <li className="flex items-start gap-2"><i className="fa-solid fa-check text-blue-500 mt-1"></i> <span><strong>인스타그램</strong>은 의료법 위반 이슈에 매우 취약</span></li>
              <li className="flex items-start gap-2"><i className="fa-solid fa-check text-blue-500 mt-1"></i> <span><strong>2026년 현재까지</strong> 가장 안정적으로 실제 내원, 신환을 만들어내는 채널은 단연 블로그</span></li>
            </ul>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg mt-3 border border-blue-100">
            <p className="text-sm text-blue-800 font-medium leading-relaxed">
              단, AI로 대충 쓴 글이나 프로그램 배포 방식은 이제 통하지 않습니다. 리마업처럼 AI 검색까지 대비한 고퀄리티 정성 포스팅만이 살아남습니다.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "효과를 보려면 최소 기간을 얼마나 잡아야 하나요?",
      answer: (
        <div className="space-y-4">
          <p className="font-bold text-slate-800 text-base">최소 3개월, 본격 성장은 6개월 이후입니다.</p>
          
          <div className="space-y-3">
            <p className="font-bold text-blue-600 border-b border-blue-100 pb-1">블로그 성장 타임라인</p>
            
            <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
              <strong className="text-slate-800 block mb-1">1~3개월 (기반 구축기)</strong>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                <li>네이버가 블로그를 신뢰하기 시작</li>
                <li>지수 축적 단계</li>
                <li>기초 콘텐츠 셋업</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
              <strong className="text-slate-800 block mb-1">3~6개월 (성장 가속기)</strong>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                <li>유의미한 유입 시작</li>
                <li>"블로그 보고 왔어요" 체감</li>
                <li>키워드 노출 안정화</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
              <strong className="text-slate-800 block mb-1">6개월 이후 (J커브 진입)</strong>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                <li>폭발적 성장 구간</li>
                <li>복리 효과 본격화</li>
                <li>경쟁사 추월 시작</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg mt-3">
            <strong className="text-blue-800 block mb-1">격전지(강남, 서초 등)의 경우</strong>
            <p className="text-sm text-blue-700">조금 더 긴 호흡 + 추가 전략이 필요할 수 있습니다. 리마업이 지역별 맞춤 전략을 설계해 드립니다.</p>
          </div>
        </div>
      )
    },
    {
      question: "노출은 되는데 환자가 안 오는 이유는 뭔가요?",
      answer: (
        <div className="space-y-4">
          <p className="font-bold text-slate-800 text-base">상위노출은 입장권이고, 환자를 만드는 건 설득력입니다.</p>
          
          <div className="bg-white p-4 rounded border border-slate-200 shadow-sm space-y-2">
            <strong className="text-blue-600 block">2026년 AI 웹 검색(RAG) 시대</strong>
            <p className="text-sm text-slate-600">기계적 노출보다 콘텐츠의 질과 신뢰성이 더 중요해졌습니다.</p>
          </div>

          <div className="space-y-2">
            <strong className="text-slate-800 block">환자가 이탈하는 3가지 이유</strong>
            <ul className="space-y-2 text-sm text-slate-600 bg-slate-100 p-3 rounded-lg">
              <li className="flex items-start gap-2"><i className="fa-solid fa-triangle-exclamation text-red-400 mt-1"></i> <span><strong>조악한 디자인</strong> → 신뢰 하락</span></li>
              <li className="flex items-start gap-2"><i className="fa-solid fa-triangle-exclamation text-red-400 mt-1"></i> <span><strong>AI 자동 생성 글</strong> → 진정성 없음</span></li>
              <li className="flex items-start gap-2"><i className="fa-solid fa-triangle-exclamation text-red-400 mt-1"></i> <span><strong>환자 심리 미반영</strong> → 설득 실패</span></li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="flex-1 bg-slate-100 p-3 rounded-lg text-center">
              <span className="block text-xs text-slate-500 mb-1">클릭을 부르는 것</span>
              <strong className="text-slate-800">노출</strong>
            </div>
            <div className="flex-1 bg-blue-50 p-3 rounded-lg text-center border border-blue-100">
              <span className="block text-xs text-blue-500 mb-1">내원을 부르는 것</span>
              <strong className="text-blue-700">진정성 있는 기획<br/>+ 고퀄리티 콘텐츠</strong>
            </div>
          </div>

          <p className="text-sm font-medium text-slate-700 mt-2 text-center bg-white py-2 rounded border border-slate-200">
            리마업은 노출 그 이상, <span className="text-blue-600">환자의 마음을 움직이는 심리학적 글쓰기</span>를 지향합니다.
          </p>
        </div>
      )
    },
    {
      question: "계약 기간은 어떻게 되나요?",
      answer: "기본 계약 기간은 3개월부터 시작됩니다. 마케팅 효과가 나타나고 자리를 잡기 위해 필요한 최소한의 기간입니다. 매월 제공되는 성과 리포트를 통해 진행 상황을 투명하게 확인하실 수 있습니다."
    },
    {
      question: "내용 수정은 얼마나 자주 가능한가요?",
      answer: "수정 횟수에 제한을 두지 않습니다. 원장님이 만족하실 때까지 수정해 드리며, 피드백은 업무 시간 내 즉시 반영을 원칙으로 합니다."
    },
    {
      question: "어떤 병원 진료 과목이든 가능한가요?",
      answer: "네, 가능합니다. 피부과, 성형외과, 정형외과, 치과, 한의원 등 다양한 진료 과목의 성공 사례를 보유하고 있으며 각 과목별 특성에 맞는 전문 작가가 배정됩니다."
    },
    {
      question: "보고서는 어떻게 제공되나요?",
      answer: "매월 말일, 키워드 노출 현황, 유입 통계, 블로그 지수 변화 등을 정리한 월간 리포트를 PDF 형태로 상세하게 전달해 드립니다."
    }
  ];

  return (
    <section id="faq" className="py-24 relative bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">자주 묻는 <span className="text-gradient">질문</span></h2>
            <p className="text-slate-500 text-lg">궁금하신 점을 미리 확인해 보세요.</p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="glass-card rounded-2xl p-2 md:p-8 bg-white border border-slate-200 shadow-lg">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default FAQ;
