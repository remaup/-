import React from 'react';

const FloatingButtons: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 items-end">
      {/* Inquiry Button */}
      <button
        onClick={scrollToContact}
        className="flex items-center justify-center gap-2 w-[130px] md:w-[145px] py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-blue-600 to-sky-500 text-white"
        aria-label="무료 진단 신청하기"
      >
        <i className="fa-solid fa-file-signature text-lg"></i>
        <span className="font-bold text-sm md:text-base">문의하기</span>
      </button>

      {/* Kakao Button */}
      <a
        href="https://open.kakao.com/o/sqsUDHoi"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center gap-2 w-[130px] md:w-[145px] py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 group"
        style={{ backgroundColor: '#FEE500', color: '#3A1D1D' }}
        aria-label="카카오톡 본사 문의"
      >
        <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-7 md:h-7" fill="currentColor">
          <path d="M16 4.64c-6.96 0-12.64 4.48-12.64 10.08 0 3.52 2.32 6.64 5.76 8.48l-1.44 5.44c-.16.48.32.88.72.64l6.4-4.24c.4.08.8.08 1.2.08 6.96 0 12.64-4.48 12.64-10.08S22.96 4.64 16 4.64z" />
        </svg>
        <span className="font-bold text-sm md:text-base">본사 문의</span>
        
        {/* Notification dot to draw attention */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#FEE500]"></span>
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
