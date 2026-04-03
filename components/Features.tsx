import React, { useEffect, useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const Features: React.FC = () => {
  const [activeMessage, setActiveMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage((prev) => (prev < 4 ? prev + 1 : 0));
    }, 2000); // Show next message every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const messages = [
    {
      id: 1,
      sender: 'me',
      text: '원장님, 금일 작성된 블로그 원고 초안 보내드립니다. 확인 부탁드립니다!',
      time: '오전 10:30'
    },
    {
      id: 2,
      sender: 'other',
      text: '내용 좋습니다. 다만 이벤트 기간을 다음 달까지로 수정 가능할까요?',
      time: '오전 10:35'
    },
    {
      id: 3,
      sender: 'me',
      text: '네 원장님! 즉시 수정하여 10분 내로 재전송해 드리겠습니다.',
      time: '오전 10:36'
    },
    {
      id: 4,
      sender: 'me',
      text: (
        <div className="w-full">
          <p className="mb-2">수정 완료되었습니다.</p>
          <div className="flex items-center gap-3 p-2.5 bg-white/20 rounded-xl border border-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
               <i className="fa-solid fa-file-word text-blue-600 text-base"></i>
            </div>
            <div className="flex-1 min-w-0 text-left">
               <p className="text-xs font-bold text-white truncate">5월_이벤트_원고_수정본.docx</p>
               <p className="text-[10px] text-blue-50 opacity-90">24.5 KB</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-arrow-down text-white text-[10px]"></i>
            </div>
          </div>
        </div>
      ),
      time: '오전 10:45'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(15,23,42,0.5),rgba(15,23,42,1))]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Phone Mockup */}
          <RevealOnScroll className="relative flex justify-center lg:justify-end">
            {/* Phone Frame - Changed to Silver/Light style for contrast */}
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-300 overflow-hidden ring-1 ring-white/50">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-slate-50 relative flex flex-col">
                {/* Status Bar */}
                <div className="h-12 bg-white flex items-center justify-between px-6 pt-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">9:41</span>
                  <div className="flex gap-1">
                    <i className="fa-solid fa-signal text-[10px] text-slate-900"></i>
                    <i className="fa-solid fa-wifi text-[10px] text-slate-900"></i>
                    <i className="fa-solid fa-battery-full text-[10px] text-slate-900"></i>
                  </div>
                </div>

                {/* Chat Header */}
                <div className="h-14 bg-white flex items-center px-4 border-b border-slate-100 shadow-sm z-10">
                  <i className="fa-solid fa-chevron-left text-slate-900 mr-4"></i>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                        <i className="fa-solid fa-user-doctor text-slate-500 text-sm"></i>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-900">김원장님</h4>
                        <span className="text-[10px] text-green-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 온라인
                        </span>
                    </div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#f2f4f6]">
                  {messages.map((msg, index) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} transition-all duration-500 ${index < activeMessage + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                        msg.sender === 'me' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-white text-slate-800 rounded-tl-none border border-slate-300'
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-slate-400 self-end ml-1 mb-1">{msg.time}</span>
                    </div>
                  ))}
                  {activeMessage < 3 && (
                     <div className="flex justify-start opacity-0 animate-pulse delay-1000">
                        <div className="bg-slate-200 rounded-full px-3 py-1 text-xs text-slate-500">입력 중...</div>
                     </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="h-16 bg-white border-t border-slate-200 flex items-center px-4 gap-2">
                  <i className="fa-solid fa-plus text-slate-400 text-lg"></i>
                  <div className="flex-1 h-9 bg-slate-100 rounded-full px-4 flex items-center text-sm text-slate-400 border border-slate-200">
                    메시지를 입력하세요
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <i className="fa-solid fa-arrow-up text-sm"></i>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-blue-500/20 rounded-[3.5rem] -z-10 blur-3xl"></div>
          </RevealOnScroll>

          {/* Right Column: Text Content */}
          <RevealOnScroll delay={0.2} className="relative">
            {/* Decorative Gradients for Text Area */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-12 relative z-10">
              <div className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 -z-10 rounded-r-xl"></div>
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"></span>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-blue-500 text-3xl font-black drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">01</span>
                  의료법 위반 0건, 원장님의 면허를 지킵니다
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  병원 전문 마케터가 기획부터 원고 작성까지 전담합니다. 심의 기준을 철저히 준수하여 영업정지 등의 리스크를 원천 차단하고<br />
                  설득력 높은 카피라이팅으로 환자의 신뢰를 얻습니다.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-800 hover:border-sky-500 transition-colors duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 to-sky-500/0 group-hover:from-sky-500/5 group-hover:to-transparent transition-all duration-500 -z-10 rounded-r-xl"></div>
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-sky-500 transition-colors shadow-[0_0_10px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.6)]"></span>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-sky-500 text-3xl font-black drop-shadow-[0_0_15px_rgba(14,165,233,0.4)]">02</span>
                  답답함 제로, 1시간 이내 즉각 피드백
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  대행사에 돈만 쓰고 연락이 안 되어 답답하셨나요? 리마업은 전담 매니저가 배정되어 어떠한 문제나 수정 사항이 발생했을 때, 1시간 이내에 즉각적인 조치를 취합니다.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-800 hover:border-indigo-500 transition-colors duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-transparent transition-all duration-500 -z-10 rounded-r-xl"></div>
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-indigo-500 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"></span>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-indigo-500 text-3xl font-black drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]">03</span>
                  단순 노출이 아닌 '실제 내원'을 만드는 기획
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  원장님의 진료 철학을 담아<br />
                  실제 환자의 내원(전환율)을 이끌어내는 기획<br />
                  <br />
                  단순 노출이 아닌, 병원 매출 상승에 직결되는<br />
                  고효율 키워드 발굴 및 관리
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Features;
