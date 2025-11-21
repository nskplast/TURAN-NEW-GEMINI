import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Globe, ChevronDown } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Components
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Production from './components/Production';
import Contact from './components/Contact';
import Blog from './components/Blog';
import AICareAssistant from './components/AICareAssistant';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NavLink: React.FC<{ to: string; label: string; onClick?: () => void }> = ({ to, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
        isActive 
          ? 'text-orange-600 border-b-2 border-orange-600' 
          : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'
      }`}
    >
      {label}
    </Link>
  );
};

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (lang: 'en' | 'ru') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-bold uppercase text-slate-600 hover:text-slate-900 focus:outline-none"
      >
        <Globe size={16} />
        {language}
        <ChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-sm shadow-lg border border-slate-200 z-50 animate-fade-in">
          <button 
            onClick={() => handleLanguageSelect('en')}
            className={`block w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors border-b border-slate-50 ${language === 'en' ? 'text-orange-600 font-bold' : 'text-slate-600'}`}
          >
            English
          </button>
          <button 
            onClick={() => handleLanguageSelect('ru')}
            className={`block w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${language === 'ru' ? 'text-orange-600 font-bold' : 'text-slate-600'}`}
          >
            Русский
          </button>
        </div>
      )}
    </div>
  );
};

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { t, setLanguage, language } = useLanguage();
  
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col animate-fade-in">
      <div className="flex justify-between items-center p-4 border-b border-slate-100">
         <div className="text-2xl font-black text-slate-900 tracking-tighter">
            TURAN<span className="text-orange-600">PET</span>
         </div>
          <button onClick={onClose} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
            <X size={24} />
          </button>
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        <NavLink to="/" label={t('nav.home')} onClick={onClose} />
        <NavLink to="/catalog" label={t('nav.products')} onClick={onClose} />
        <NavLink to="/production" label={t('nav.production')} onClick={onClose} />
        <NavLink to="/about" label={t('nav.company')} onClick={onClose} />
        <NavLink to="/blog" label={t('nav.news')} onClick={onClose} />
        <NavLink to="/contact" label={t('nav.contacts')} onClick={onClose} />
      </nav>
      
      <div className="p-4 border-t border-slate-100">
         <div className="flex gap-2 justify-center mb-4">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded border ${language === 'en' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-300'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('ru')}
              className={`px-4 py-2 rounded border ${language === 'ru' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-300'}`}
            >
              RU
            </button>
         </div>
      </div>

      <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100">
        <div className="flex items-center space-x-2 text-slate-600 mb-2">
          <Phone size={18} />
          <span>+7 (383) 123-45-67</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-600">
          <Mail size={18} />
          <span>sbs@turanpet.ru</span>
        </div>
      </div>
    </div>
  );
};

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const { t } = useLanguage();

  return (
      <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
        
        {/* Top Bar */}
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden md:flex justify-between items-center">
           <div className="flex items-center space-x-6">
              <span className="flex items-center gap-2"><Globe size={14}/> Global Delivery: Russia, CIS, Europe</span>
              <span className="flex items-center gap-2"><MapPin size={14}/> HQ: Novosibirsk, Russia</span>
           </div>
           <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-white"><Linkedin size={14}/></a>
              <a href="#" className="hover:text-white"><Facebook size={14}/></a>
              <a href="mailto:sbs@turanpet.ru" className="hover:text-white">sbs@turanpet.ru</a>
           </div>
        </div>

        {/* Navigation */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-emerald-700 text-white flex items-center justify-center rounded-sm">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div className="flex flex-col leading-none">
                 <span className="text-2xl font-black tracking-tighter text-slate-900">TURAN<span className="text-emerald-700">PET</span></span>
                 <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Industrial Solutions</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              <NavLink to="/" label={t('nav.home')} />
              <NavLink to="/catalog" label={t('nav.products')} />
              <NavLink to="/production" label={t('nav.production')} />
              <NavLink to="/about" label={t('nav.company')} />
              <NavLink to="/blog" label={t('nav.news')} />
              <NavLink to="/contact" label={t('nav.contacts')} />
            </nav>

            {/* CTA / Mobile Toggle */}
            <div className="flex items-center gap-4">
               <div className="hidden lg:block border-r border-slate-200 pr-4 mr-1">
                  <LanguageSwitcher />
               </div>
               <button 
                 onClick={() => setIsAiOpen(!isAiOpen)}
                 className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-emerald-800 rounded-sm font-bold text-xs uppercase tracking-wider transition-colors"
               >
                  {t('btn.ai')}
               </button>
               <Link 
                 to="/contact"
                 className="hidden md:flex bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-sm font-bold text-sm transition-all shadow-md"
               >
                 {t('btn.quote')}
               </Link>
               <button 
                 className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                 onClick={() => setIsMobileMenuOpen(true)}
               >
                 <Menu size={24} />
               </button>
            </div>
          </div>
        </header>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/production" element={<Production />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Floating AI Widget */}
        {isAiOpen && (
            <div className="fixed bottom-4 right-4 z-50 w-[90vw] md:w-[400px] shadow-2xl animate-fade-in">
                 <div className="flex justify-end mb-2">
                    <button onClick={() => setIsAiOpen(false)} className="bg-slate-800 text-white p-2 rounded-full shadow-lg"><X size={16}/></button>
                 </div>
                 <AICareAssistant />
            </div>
        )}

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
          <div className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-8 text-sm">
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 bg-emerald-700 flex items-center justify-center rounded-sm">
                      <span className="font-black text-lg">T</span>
                    </div>
                    <span className="font-black text-xl tracking-tighter">TURAN<span className="text-emerald-600">PET</span></span>
                </div>
                <p>{t('footer.desc')}</p>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{t('nav.products')}</h4>
                <ul className="space-y-3">
                    <li><Link to="/catalog" className="hover:text-orange-500 transition-colors">{t('cat.pet')}</Link></li>
                    <li><Link to="/catalog" className="hover:text-orange-500 transition-colors">{t('cat.film')}</Link></li>
                    <li><Link to="/catalog" className="hover:text-orange-500 transition-colors">{t('cat.boxes')}</Link></li>
                    <li><Link to="/catalog" className="hover:text-orange-500 transition-colors">{t('cat.tools')}</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{t('nav.company')}</h4>
                <ul className="space-y-3">
                    <li><Link to="/about" className="hover:text-orange-500 transition-colors">{t('nav.company')}</Link></li>
                    <li><Link to="/production" className="hover:text-orange-500 transition-colors">{t('nav.production')}</Link></li>
                    <li><Link to="/blog" className="hover:text-orange-500 transition-colors">{t('nav.news')}</Link></li>
                    <li><Link to="/contact" className="hover:text-orange-500 transition-colors">{t('nav.contacts')}</Link></li>
                </ul>
            </div>
            
            <div>
                 <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{t('nav.contacts')}</h4>
                 <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Phone size={16} className="mt-1 text-emerald-600" />
                        <span>1-800-PET-STRAP<br/>+7 (383) 123-45-67</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Mail size={16} className="mt-1 text-emerald-600" />
                        <a href="mailto:sbs@turanpet.ru" className="hover:text-white">sbs@turanpet.ru</a>
                    </li>
                    <li className="flex items-start gap-3">
                        <MapPin size={16} className="mt-1 text-emerald-600" />
                        <span>Novosibirsk, Russia<br/>Mary, Turkmenistan</span>
                    </li>
                 </ul>
            </div>
          </div>
          <div className="bg-black py-6">
             <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
                <p>{t('footer.rights')}</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-400">Terms of Service</a>
                </div>
             </div>
          </div>
        </footer>
      </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout />
      </Router>
    </LanguageProvider>
  );
};

export default App;