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
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">{t('about.h2')}</h2>
                <p className="text-slate-600 leading-relaxed">
                    {t('about.p1')}
                </p>
                <p className="text-slate-600 leading-relaxed">
                    {t('about.p2')}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="border-l-4 border-orange-600 pl-4">
                        <span className="block text-3xl font-black text-slate-900">2015</span>
                        <span className="text-sm text-slate-500">{t('about.founded')}</span>
                    </div>
                    <div className="border-l-4 border-emerald-600 pl-4">
                        <span className="block text-3xl font-black text-slate-900">500T+</span>
                        <span className="text-sm text-slate-500">{t('about.output')}</span>
                    </div>
                </div>
            </div>
            <div className="relative">
                 <img 
                    src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80" 
                    alt="Extrusion Line" 
                    className="rounded shadow-2xl"
                 />
                 <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded shadow-lg max-w-xs border-t-4 border-emerald-600 hidden md:block">
                     <p className="font-bold text-slate-800 italic">"We control quality from the raw flake to the final coil."</p>
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
                      <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                      <p className="text-slate-600 text-sm">
                          Our "Bottle-to-Strap" technology reduces plastic waste. Our PET strap is 100% recyclable.
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-orange-100 text-orange-700 flex items-center justify-center rounded mb-4">
                          <ShieldCheck size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                      <p className="text-slate-600 text-sm">
                          Every batch undergoes tensile strength, elongation, and split resistance testing in our on-site laboratory.
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 text-blue-700 flex items-center justify-center rounded mb-4">
                          <TrendingUp size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Reliability</h3>
                      <p className="text-slate-600 text-sm">
                          With warehouses in Novosibirsk, we guarantee stable supply chains for our Russian and European partners.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;