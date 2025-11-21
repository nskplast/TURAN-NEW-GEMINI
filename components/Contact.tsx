import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Location {
  id: string;
  nameKey: string;
  name_ru: string;
  cityKey: string;
  city_ru: string;
  address: string;
  address_ru: string;
  lat: number;
  lng: number;
  zoom: number;
  type: 'hq' | 'warehouse';
}

const LOCATIONS: Location[] = [
  {
    id: 'production',
    nameKey: 'Production Facility',
    name_ru: 'Производство',
    cityKey: 'Mary, Turkmenistan',
    city_ru: 'г. Мары, Туркменистан',
    address: 'Industrial Zone, Sector 4',
    address_ru: 'Промышленная зона, Сектор 4',
    lat: 37.600000,
    lng: 61.833300,
    zoom: 12,
    type: 'hq'
  },
  {
    id: 'office',
    nameKey: 'Main Office',
    name_ru: 'Офис',
    cityKey: 'Novosibirsk, Russia',
    city_ru: 'г. Новосибирск, Россия',
    address: 'ul. Mira 63a/1, Office 5',
    address_ru: 'ул. Мира 63а/1, оф. 5',
    lat: 54.964342,
    lng: 82.926046,
    zoom: 17,
    type: 'hq'
  },
  {
    id: 'warehouse1',
    nameKey: 'Warehouse 1 (PET & Film)',
    name_ru: 'Склад 1 (ПЭТ и Пленка)',
    cityKey: 'Novosibirsk, Russia',
    city_ru: 'г. Новосибирск, Россия',
    address: 'Tolmachevskoye Shosse, 21',
    address_ru: 'Толмачевское шоссе, 21',
    lat: 54.955430,
    lng: 82.824656,
    zoom: 16,
    type: 'warehouse'
  },
  {
    id: 'warehouse2',
    nameKey: 'Warehouse 2 (Cardboard)',
    name_ru: 'Склад 2 (Гофротара)',
    cityKey: 'Novosibirsk, Russia',
    city_ru: 'г. Новосибирск, Россия',
    address: 'ul. Sibiryakov-Gvardeyscev, 49B, bldg 12',
    address_ru: 'ул. Сибиряков-Гвардейцев, 49Б, к12',
    lat: 54.951404,
    lng: 82.916311,
    zoom: 16,
    type: 'warehouse'
  }
];

const Contact: React.FC = () => {
  const [activeLocationId, setActiveLocationId] = useState<string>(LOCATIONS[1].id); 
  const { t, language } = useLanguage();
  
  const activeLocation = LOCATIONS.find(l => l.id === activeLocationId) || LOCATIONS[1];

  const getName = (loc: Location) => language === 'ru' ? loc.name_ru : loc.nameKey;
  const getCity = (loc: Location) => language === 'ru' ? loc.city_ru : loc.cityKey;
  const getAddress = (loc: Location) => language === 'ru' ? loc.address_ru : loc.address;

  // Dynamic URL generation to support language parameter
  const getMapSrc = (loc: Location) => {
    // ll = longitude, latitude
    // pt = longitude, latitude, style (pm2rdm = red pin)
    // lang = ru_RU for Russian map tiles/labels, en_US for English
    const langParam = language === 'ru' ? 'ru_RU' : 'en_US';
    return `https://yandex.ru/map-widget/v1/?ll=${loc.lng}%2C${loc.lat}&z=${loc.zoom}&pt=${loc.lng}%2C${loc.lat},pm2rdm&lang=${langParam}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 animate-fade-in">
      <div className="bg-slate-900 text-white py-16">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-black mb-4">{t('contact.title')}</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
                {t('contact.subtitle')}
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 pb-16">
         <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">
                <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Phone className="text-orange-600"/> {t('contact.sales')}
                    </h3>
                    <p className="text-slate-600 mb-2">{t('contact.sales_desc')}</p>
                    <a href="tel:+73831234567" className="text-2xl font-bold text-slate-800 hover:text-orange-600 block mb-1">
                        +7 (383) 123-45-67
                    </a>
                    <a href="mailto:sbs@turanpet.ru" className="text-emerald-700 font-bold hover:underline block">
                        sbs@turanpet.ru
                    </a>
                </div>

                <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Clock className="text-emerald-600"/> {t('contact.working_hours')}
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex justify-between">
                            <span>{t('contact.mon_fri')}</span>
                            <span className="font-bold">9:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>{t('contact.sat')}</span>
                            <span className="font-bold">10:00 AM - 2:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>{t('contact.sun')}</span>
                            <span className="text-slate-400">{t('contact.closed')}</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Map & Addresses */}
            <div className="lg:col-span-2 bg-white rounded shadow-sm border border-slate-200 flex flex-col overflow-hidden">
                {/* Interactive Map Iframe */}
                <div className="w-full h-[500px] bg-slate-100 relative border-b border-slate-200">
                    <iframe 
                        key={`${activeLocation.id}-${language}`}
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        src={getMapSrc(activeLocation)}
                        title={`Map of ${getName(activeLocation)}`}
                        className="filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                        allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold shadow text-slate-800 rounded border border-slate-200 pointer-events-none">
                        {language === 'ru' ? 'Просмотр: ' : 'Viewing: '}{getName(activeLocation)}
                    </div>
                </div>

                <div className="p-6 grid md:grid-cols-2 gap-6 bg-white">
                    <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 uppercase text-xs tracking-widest text-emerald-700">{t('contact.production_hq')}</h4>
                        {LOCATIONS.filter(l => l.type === 'hq').map(loc => (
                            <button 
                                key={loc.id}
                                onClick={() => setActiveLocationId(loc.id)}
                                className={`w-full text-left group p-3 rounded transition-all duration-200 ${
                                    activeLocationId === loc.id 
                                        ? 'bg-slate-50 border-l-4 border-orange-600 shadow-sm' 
                                        : 'hover:bg-slate-50 border-l-4 border-transparent'
                                }`}
                            >
                                <p className={`font-bold text-sm flex items-center gap-2 ${
                                    activeLocationId === loc.id ? 'text-orange-700' : 'text-slate-800'
                                }`}>
                                    <MapPin size={14} className={activeLocationId === loc.id ? 'text-orange-600' : 'text-slate-400 group-hover:text-orange-600'}/> 
                                    {getName(loc)}
                                </p>
                                <p className="text-sm text-slate-500 pl-6">{getCity(loc)}</p>
                                <p className="text-xs text-slate-400 pl-6 mt-1">{getAddress(loc)}</p>
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 uppercase text-xs tracking-widest text-emerald-700">{t('contact.warehouses')}</h4>
                        {LOCATIONS.filter(l => l.type === 'warehouse').map(loc => (
                            <button 
                                key={loc.id}
                                onClick={() => setActiveLocationId(loc.id)}
                                className={`w-full text-left group p-3 rounded transition-all duration-200 ${
                                    activeLocationId === loc.id 
                                        ? 'bg-slate-50 border-l-4 border-orange-600 shadow-sm' 
                                        : 'hover:bg-slate-50 border-l-4 border-transparent'
                                }`}
                            >
                                <p className={`font-bold text-sm flex items-center gap-2 ${
                                    activeLocationId === loc.id ? 'text-orange-700' : 'text-slate-800'
                                }`}>
                                    <MapPin size={14} className={activeLocationId === loc.id ? 'text-orange-600' : 'text-slate-400 group-hover:text-orange-600'}/> 
                                    {getName(loc)}
                                </p>
                                <p className="text-sm text-slate-500 pl-6">{getCity(loc)}</p>
                                <p className="text-xs text-slate-400 pl-6 mt-1">{getAddress(loc)}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default Contact;