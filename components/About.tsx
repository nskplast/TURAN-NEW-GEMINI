
import React from 'react';
import { Globe, ShieldCheck, Recycle, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-black mb-6">{t('about.title')}</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto px-4">
            {t('about.subtitle')}
        </p>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">{t('about.h2')}</h2>
                <p className="text-slate-600 leading-relaxed text-justify">
                    {t('about.p1')}
                </p>
                <p className="text-slate-600 leading-relaxed text-justify">
                    {t('about.p2')}
                </p>
                 <p className="text-slate-600 leading-relaxed text-justify">
                    {t('about.p3')}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="border-l-4 border-orange-600 pl-4">
                        <span className="block text-3xl font-black text-slate-900">2015</span>
                        <span className="text-sm text-slate-500">{t('about.founded')}</span>
                    </div>
                    <div className="border-l-4 border-emerald-600 pl-4">
                        <span className="block text-3xl font-black text-slate-900">2023</span>
                        <span className="text-sm text-slate-500">{t('about.output')}</span>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-rows-2 gap-4 h-full">
                 <div className="relative h-64 md:h-auto overflow-hidden rounded-lg shadow-lg group">
                    <img 
                        src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=800&q=80" 
                        alt="Factory Exterior" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4 w-full">
                         <span className="text-white text-xs font-bold uppercase tracking-wider">Production Facility (Exterior)</span>
                    </div>
                 </div>
                 <div className="relative h-64 md:h-auto overflow-hidden rounded-lg shadow-lg group">
                    <img 
                        src="https://images.unsplash.com/photo-1581093588402-fdd11a02777e?auto=format&fit=crop&w=800&q=80" 
                        alt="Production Line Interior" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                     <div className="absolute bottom-0 left-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4 w-full">
                         <span className="text-white text-xs font-bold uppercase tracking-wider">Production Line (Interior)</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-700 flex items-center justify-center rounded mb-4">
                          <Recycle size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{t('about.val1_title')}</h3>
                      <p className="text-slate-600 text-sm">
                          {t('about.val1_desc')}
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-orange-100 text-orange-700 flex items-center justify-center rounded mb-4">
                          <ShieldCheck size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{t('about.val2_title')}</h3>
                      <p className="text-slate-600 text-sm">
                          {t('about.val2_desc')}
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 text-blue-700 flex items-center justify-center rounded mb-4">
                          <TrendingUp size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{t('about.val3_title')}</h3>
                      <p className="text-slate-600 text-sm">
                          {t('about.val3_desc')}
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;
