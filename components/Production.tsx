
import React from 'react';
import { 
  Recycle, 
  Scissors, 
  Droplets, 
  Wind, 
  Thermometer, 
  Ruler, 
  Maximize2, 
  Fingerprint, 
  Snowflake, 
  Disc, 
  Microscope, 
  Truck,
  ChevronRight,
  Factory
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Step: React.FC<{ number: string; title: string; desc: string; icon: React.ReactNode; isLast?: boolean }> = ({ number, title, desc, icon, isLast }) => (
  <div className="bg-white p-6 rounded shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow h-full flex flex-col overflow-hidden">
    {/* Large Watermark Number - Made more visible as requested */}
    <div className="absolute top-0 right-4 text-6xl font-black text-slate-200 group-hover:text-orange-100 transition-colors select-none z-0 opacity-80">
        {number}
    </div>
    
    <div className="mb-4 text-emerald-700 p-3 bg-emerald-50 rounded-full w-fit group-hover:bg-orange-600 group-hover:text-white transition-colors relative z-10">
        {icon}
    </div>
    
    <h3 className="text-lg font-bold text-slate-800 mb-2 relative z-10">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed relative z-10 flex-grow">{desc}</p>

    {/* Arrow indicator for flow */}
    {!isLast && (
      <div className="absolute bottom-4 right-4 text-emerald-200 group-hover:text-orange-400 transition-colors">
        <ChevronRight size={28} strokeWidth={3} />
      </div>
    )}
  </div>
);

const Production: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { id: '1', icon: <Recycle size={24}/> },
    { id: '2', icon: <Scissors size={24}/> },
    { id: '3', icon: <Droplets size={24}/> },
    { id: '4', icon: <Wind size={24}/> },
    { id: '5', icon: <Thermometer size={24}/> },
    { id: '6', icon: <Ruler size={24}/> },
    { id: '7', icon: <Maximize2 size={24}/> },
    { id: '8', icon: <Fingerprint size={24}/> },
    { id: '9', icon: <Snowflake size={24}/> },
    { id: '10', icon: <Disc size={24}/> },
    { id: '11', icon: <Microscope size={24}/> },
    { id: '12', icon: <Truck size={24}/> },
  ];

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

       {/* Production Overview Section */}
       <div className="bg-white py-16 border-b border-slate-100">
          <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
                 <div className="hidden md:flex bg-emerald-100 p-6 rounded-lg text-emerald-700 shrink-0">
                    <Factory size={48} />
                 </div>
                 <div>
                     <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('prod.overview_title')}</h2>
                     <p className="text-lg text-slate-600 leading-relaxed text-justify">
                        {t('prod.overview_text')}
                     </p>
                 </div>
             </div>
          </div>
       </div>

       <div className="container mx-auto px-4 py-16 bg-slate-50">
           <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900">{t('prod.process_title')}</h2>
               <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {steps.map((step, index) => (
                   <Step 
                      key={step.id}
                      number={step.id} 
                      icon={step.icon}
                      title={t(`prod.step${step.id}_title` as any)} 
                      desc={t(`prod.step${step.id}_desc` as any)}
                      isLast={index === steps.length - 1}
                   />
               ))}
           </div>
       </div>

       <div className="bg-white py-16">
           <div className="container mx-auto px-4">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                   <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" 
                      alt="Quality Lab" 
                      className="rounded-lg shadow-xl border border-slate-100"
                   />
                   <div className="space-y-6">
                       <h2 className="text-3xl font-bold text-slate-900">{t('prod.lab_title')}</h2>
                       <p className="text-slate-600 text-lg leading-relaxed">
                           {t('prod.lab_desc')}
                       </p>
                       <ul className="space-y-4">
                           {[1, 2, 3, 4].map((num) => (
                               <li key={num} className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50 p-3 rounded border border-slate-100">
                                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                   {t(`prod.lab_test${num}` as any)}
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
