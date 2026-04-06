import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mkopqjyq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        alert('무료 진단 신청이 성공적으로 접수되었습니다. 담당자가 곧 연락드리겠습니다.');
      } else {
        setStatus('error');
        alert('신청 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch (error) {
      setStatus('error');
      alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.');
    } finally {
      if (status !== 'success') {
        setStatus('idle');
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">우리 병원 블로그 방향성을 제시해 드립니다.</h2>
              <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                원장님 병원의 상황과 목표에 맞는<br />
                최적의 플랜을 선택해 주세요.<br />
                <span className="text-blue-400 font-bold">상세한 진단을 통해 가장 효율적인<br className="md:hidden" /> 1:1 맞춤형 전략을 제안해 드립니다.</span>
              </p>

              <form className="space-y-4 max-w-lg mx-auto text-left" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hospital" className="block text-xs font-medium text-slate-400 mb-1 ml-1">병원명</label>
                    <input 
                      id="hospital"
                      name="병원명"
                      type="text" 
                      required 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors backdrop-blur-sm placeholder-slate-500" 
                      placeholder="OO의원"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-xs font-medium text-slate-400 mb-1 ml-1">직책</label>
                    <input 
                      id="position"
                      name="직책"
                      type="text" 
                      required 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors backdrop-blur-sm placeholder-slate-500" 
                      placeholder="예: 원장, 마케팅 실장"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-400 mb-1 ml-1">연락처</label>
                    <input 
                      id="phone"
                      name="연락처"
                      type="tel" 
                      required 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors backdrop-blur-sm placeholder-slate-500" 
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="plan" className="block text-xs font-medium text-slate-400 mb-1 ml-1">플랜 선택</label>
                    <div className="relative">
                      <select 
                        id="plan"
                        name="플랜선택"
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors backdrop-blur-sm appearance-none cursor-pointer placeholder-slate-500"
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-slate-800 text-slate-500">플랜 선택</option>
                        <option value="베이직 (월 8회)" className="bg-slate-800 text-white">베이직 (월 8회)</option>
                        <option value="스탠다드 (월 12회)" className="bg-slate-800 text-white">스탠다드 (월 12회)</option>
                        <option value="프리미엄 (월 16회)" className="bg-slate-800 text-white">프리미엄 (월 16회)</option>
                        <option value="미정 / 상담 후 결정" className="bg-slate-800 text-white">미정 / 상담 후 결정</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                        <i className="fa-solid fa-chevron-down text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="concern" className="block text-xs font-medium text-slate-400 mb-1 ml-1">고민 사항/연락 가능 시간 (선택)</label>
                  <textarea 
                    id="concern"
                    name="고민사항 및 연락가능시간"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors h-24 backdrop-blur-sm placeholder-slate-500" 
                    placeholder="예: 상위 노출은 되는데 문의가 없어요 / 평일 오후 2시"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full relative px-8 py-4 rounded-full font-bold transition-all duration-500 transform mt-4 ${
                    status === 'submitting' 
                      ? 'bg-slate-600 text-slate-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-[length:200%_auto] hover:bg-right text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:-translate-y-1'
                  }`}
                >
                  {status === 'submitting' ? '전송 중...' : '무료 진단 신청하기'}
                </button>
              </form>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;