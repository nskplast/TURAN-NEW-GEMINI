import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Step: React.FC<{ number: string; title: string; desc: string }> = ({ number, title, desc }) => (
  <div className="flex flex-col items-center text-center max-w-xs mx-auto relative z-10">
    <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg mb-4">
        {number}
    </div>
    <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

const Production: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
       <div className="relative py-24 bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1605514501035-127088c2c323?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="Factory" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{t('prod.title')}</h1>
                <p className="text-emerald-400 font-mono uppercase tracking-widest">{t('prod.subtitle')}</p>
            </div>
       </div>

       <div className="container mx-auto px-4 py-16">
           <div className="relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-slate-200 -z-0"></div>
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
                   <Step 
                      number="01" 
                      title={t('prod.step1')} 
                      desc={t('prod.step1_desc')}
                   />
                   <Step 
                      number="02" 
                      title={t('prod.step2')} 
                      desc={t('prod.step2_desc')}
                   />
                   <Step 
                      number="03" 
                      title={t('prod.step3')} 
                      desc={t('prod.step3_desc')}
                   />
                   <Step 
                      number="04" 
                      title={t('prod.step4')} 
                      desc={t('prod.step4_desc')}
                   />
               </div>
           </div>
       </div>

       <div className="bg-slate-50 py-16">
           <div className="container mx-auto px-4">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                   <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" 
                      alt="Quality Lab" 
                      className="rounded-lg shadow-xl"
                   />
                   <div className="space-y-6">
                       <h2 className="text-3xl font-bold text-slate-900">{t('prod.lab_title')}</h2>
                       <p className="text-slate-600">
                           {t('prod.lab_desc')}
                       </p>
                       <ul className="space-y-3">
                           {[
                               "Break Strength Testing (ASTM D3950)",
                               "Elongation Recovery Analysis",
                               "Camber and Curl Measurement",
                               "Joint Efficiency Testing"
                           ].map((item, i) => (
                               <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                   {item}
                               </li>
                           ))}
                       </ul>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
};

export default Production;