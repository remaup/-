import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../public/logo.png';

const NAV_ITEMS = [
  { id: 'home', label: '홈', path: '/' },
  { id: 'about', label: '소개', path: '/' },
  { id: 'service', label: '서비스', path: '/' },
  { id: 'portfolio', label: '성공사례', path: '/' },
  { id: 'pricing', label: '가격안내', path: '/' },
  { id: 'faq', label: 'Q&A', path: '/' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: typeof NAV_ITEMS[0]) => {
    setIsMobileMenuOpen(false);
    
    if (item.path !== '/') {
      navigate(item.path);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (item.id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleContactNavigation = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => handleNavigation(NAV_ITEMS[0])}
          >
            {!logoError ? (
              <img 
                src={logoImg} 
                alt="리마업" 
                className="h-12 md:h-16 w-auto object-contain" 
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center gap-1">
                 <span className={`text-2xl font-bold tracking-tighter ${isScrolled || location.pathname !== '/' ? 'text-blue-600' : 'text-blue-400'}`}>RMU</span>
                 <span className={`text-sm font-bold tracking-widest border-l pl-2 ml-1 ${isScrolled || location.pathname !== '/' ? 'text-slate-900 border-slate-300' : 'text-white border-slate-600'}`}>READ-MA-UP</span>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`px-4 py-2 rounded-full transition-colors text-sm font-medium capitalize ${isScrolled || location.pathname !== '/' ? 'text-slate-600 hover:text-blue-600 hover:bg-slate-50' : 'text-slate-200 hover:text-white hover:bg-white/10'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              무료 진단 신청
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isScrolled || location.pathname !== '/' ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' : 'text-white hover:text-slate-200 hover:bg-white/10'}`}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 capitalize"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={handleContactNavigation}
                className="block w-full text-center mt-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-3 py-3 rounded-lg text-base font-bold"
              >
                무료 진단 신청
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;