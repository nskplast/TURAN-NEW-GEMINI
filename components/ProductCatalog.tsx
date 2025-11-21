
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { ProductCategory } from '../types';
import { ArrowRight, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CATEGORIES: ProductCategory[] = ['PET Strap', 'Stretch Film', 'Boxes', 'Tools', 'Consumables'];
const SUBCATEGORIES: Record<string, string[]> = {
  'PET Strap': ['embossed', 'smooth'],
  'Stretch Film': ['manual', 'machine'],
  'Boxes': ['4-flap', 'food', 'self-assembling', 'sheets'],
  'Tools': ['battery', 'pneumatic', 'manual']
};

const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('all');
  const { t, language } = useLanguage();

  // Reset subcategory when category changes
  useEffect(() => {
    setActiveSubCategory('all');
  }, [activeCategory]);

  const filteredProducts = PRODUCTS.filter(p => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory;
    if (!catMatch) return false;
    
    if (activeSubCategory === 'all') return true;
    return p.subcategory === activeSubCategory;
  });

  const getCategoryLabel = (cat: ProductCategory) => {
      switch(cat) {
          case 'PET Strap': return t('cat.pet');
          case 'Stretch Film': return t('cat.film');
          case 'Boxes': return t('cat.boxes');
          case 'Tools': return t('cat.tools');
          case 'Consumables': return t('cat.consumables');
          default: return cat;
      }
  };

  const getSubCategoryLabel = (sub: string) => {
    if (sub === 'all') return t('subcat.all');
    return t(`subcat.${sub}` as any);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">{t('catalog.title')}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('catalog.subtitle')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-all ${
              activeCategory === 'All' 
                ? 'bg-emerald-700 text-white shadow-lg' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-500'
            }`}
          >
            {t('catalog.all')}
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-all ${
                activeCategory === cat 
                  ? 'bg-emerald-700 text-white shadow-lg' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-500'
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Subcategories (if applicable) */}
        {activeCategory !== 'All' && SUBCATEGORIES[activeCategory] && (
           <div className="flex flex-wrap justify-center gap-4 mb-8 -mt-8 animate-fade-in">
              <button 
                onClick={() => setActiveSubCategory('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all border ${
                   activeSubCategory === 'all'
                     ? 'bg-orange-600 text-white border-orange-600'
                     : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                 {getSubCategoryLabel('all')}
              </button>
              {SUBCATEGORIES[activeCategory].map(sub => (
                 <button 
                    key={sub}
                    onClick={() => setActiveSubCategory(sub)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all border ${
                       activeSubCategory === sub
                         ? 'bg-orange-600 text-white border-orange-600'
                         : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                    }`}
                 >
                    {getSubCategoryLabel(sub)}
                 </button>
              ))}
           </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link 
              to={`/products/${product.id}`} 
              key={product.id} 
              className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  src={product.imageUrl} 
                  alt={language === 'ru' && product.name_ru ? product.name_ru : product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-0 left-0 bg-slate-900/80 text-white px-4 py-2 text-xs font-bold uppercase backdrop-blur-sm">
                  {getCategoryLabel(product.category)}
                </div>
                {product.subcategory && (
                    <div className="absolute bottom-0 right-0 bg-orange-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                        {getSubCategoryLabel(product.subcategory)}
                    </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {language === 'ru' && product.name_ru ? product.name_ru : product.name}
                </h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
                  {language === 'ru' && product.description_ru ? product.description_ru : product.description}
                </p>
                
                {/* Mini Specs Preview */}
                <div className="bg-slate-50 p-3 rounded-sm text-xs space-y-1 mb-4 text-slate-600 border border-slate-100">
                    {Object.entries(language === 'ru' && product.specs_ru ? product.specs_ru : product.specs).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                            <span className="font-medium">{key}:</span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  {product.price && (
                    <div className="text-lg font-bold text-slate-900">
                      {language === 'ru' ? `от ${product.price} ₽` : `$${product.price}`}
                    </div>
                  )}
                  <div className={`flex items-center text-emerald-700 font-bold text-sm group-hover:translate-x-2 transition-transform ${!product.price ? 'ml-auto' : ''}`}>
                    {t('catalog.view')} <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-slate-400">
                <Package size={48} className="mx-auto mb-4 opacity-50"/>
                <p>{t('catalog.empty')}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
