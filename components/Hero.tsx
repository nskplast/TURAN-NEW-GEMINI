import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Main Banner */}
      <div className="relative w-full bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
            <img 
               src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
               alt="Warehouse Logistics" 
               className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-700 text-emerald-400 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                <Globe size={14} />
                <span>{t('hero.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              {t('hero.title1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{t('hero.title2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-6">
              {t('hero.desc')}
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="bg-orange-600 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-orange-700 transition-all shadow-lg flex items-center justify-center gap-3 rounded-sm">
                {t('hero.btn_products')}
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center gap-3 rounded-sm">
                {t('hero.btn_contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Info Bar */}
      <div className="bg-emerald-800 text-white border-y border-emerald-700">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-emerald-700">
              <div className="p-8 flex items-center gap-4">
                  <Shield size={40} className="text-emerald-300 opacity-80"/>
                  <div>
                      <h3 className="font-bold text-lg">{t('stats.quality')}</h3>
                      <p className="text-emerald-200 text-sm">{t('stats.quality_desc')}</p>
                  </div>
              </div>
              <div className="p-8 flex items-center gap-4">
                  <Globe size={40} className="text-emerald-300 opacity-80"/>
                  <div>
                      <h3 className="font-bold text-lg">{t('stats.logistics')}</h3>
                      <p className="text-emerald-200 text-sm">{t('stats.logistics_desc')}</p>
                  </div>
              </div>
              <div className="p-8 flex items-center gap-4">
                  <CheckCircle size={40} className="text-emerald-300 opacity-80"/>
                  <div>
                      <h3 className="font-bold text-lg">{t('stats.pricing')}</h3>
                      <p className="text-emerald-200 text-sm">{t('stats.pricing_desc')}</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Intro Section */}
      <div className="py-20 bg-white">
         <div className="container mx-auto px-4 text-center max-w-4xl">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t('intro.title')}</h2>
             <p className="text-slate-600 text-lg leading-relaxed mb-12">
                {t('intro.desc')}
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=400&q=80" className="rounded-sm h-48 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Factory" />
                 <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=400&q=80" className="rounded-sm h-48 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Logistics" />
                 <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=400&q=80" className="rounded-sm h-48 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Warehouse" />
                 <img src="https://images.unsplash.com/photo-1616401784845-180886ba9ca8?auto=format&fit=crop&w=400&q=80" className="rounded-sm h-48 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Shipping" />
             </div>
         </div>
      </div>
    </div>
  );
};

export default Hero;