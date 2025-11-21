import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { Check, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { t, language } = useLanguage();

  if (!product) {
    return <Navigate to="/catalog" />;
  }

  const displayName = language === 'ru' && product.name_ru ? product.name_ru : product.name;
  const displayDesc = language === 'ru' && product.fullDescription_ru ? product.fullDescription_ru : (product.fullDescription || product.description);
  const displaySpecs = language === 'ru' && product.specs_ru ? product.specs_ru : product.specs;

  return (
    <div className="bg-white min-h-screen animate-fade-in pb-20">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 text-sm text-slate-500 flex items-center gap-2">
            <Link to="/" className="hover:text-emerald-700">{t('nav.home')}</Link> / 
            <Link to="/catalog" className="hover:text-emerald-700">{t('nav.products')}</Link> / 
            <span className="text-slate-900 font-medium">{displayName}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link to="/catalog" className="inline-flex items-center text-slate-500 hover:text-emerald-700 mb-8 transition-colors">
            <ArrowLeft size={18} className="mr-2"/> {t('detail.back')}
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-6">
                <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                    <img src={product.imageUrl} alt={displayName} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded border border-emerald-100 flex items-start gap-3">
                        <ShieldCheck className="text-emerald-600 shrink-0" />
                        <div>
                            <h4 className="font-bold text-emerald-900 text-sm">{t('detail.quality')}</h4>
                            <p className="text-emerald-700 text-xs mt-1">{t('detail.quality_sub')}</p>
                        </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded border border-orange-100 flex items-start gap-3">
                        <Truck className="text-orange-600 shrink-0" />
                        <div>
                            <h4 className="font-bold text-orange-900 text-sm">{t('detail.shipping')}</h4>
                            <p className="text-orange-700 text-xs mt-1">{t('detail.shipping_sub')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div>
                <div className="inline-block bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {product.category}
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{displayName}</h1>
                
                {product.price && (
                  <div className="text-3xl font-bold text-orange-600 mb-6">
                     {language === 'ru' ? `${product.price} ₽` : `$${product.price}`}
                     <span className="text-sm text-slate-400 font-normal ml-2">/ {language === 'ru' ? 'шт' : 'pc'}</span>
                  </div>
                )}

                <div className="prose prose-slate mb-8">
                    <p className="text-lg leading-relaxed text-slate-600">{displayDesc}</p>
                </div>

                {/* Specs Table */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">{t('detail.specs')}</h3>
                    <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <tbody className="divide-y divide-slate-100">
                                {Object.entries(displaySpecs).map(([key, value]) => (
                                    <tr key={key} className="hover:bg-slate-50">
                                        <td className="px-6 py-3 font-medium text-slate-500 bg-slate-50/50 w-1/3">{key}</td>
                                        <td className="px-6 py-3 font-bold text-slate-800">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">{t('detail.availability')}</span>
                        <span className="flex items-center text-emerald-600 font-bold text-sm">
                            <Check size={16} className="mr-1"/> {t('detail.instock')}
                        </span>
                    </div>
                    <Link 
                        to="/contact" 
                        className="block w-full bg-orange-600 text-white font-bold text-center py-4 rounded hover:bg-orange-700 transition-colors shadow-lg uppercase tracking-widest"
                    >
                        {t('detail.req_quote')}
                    </Link>
                    <p className="text-center text-xs text-slate-400">
                        {t('detail.moq')}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;