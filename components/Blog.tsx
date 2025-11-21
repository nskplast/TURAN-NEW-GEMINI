import React from 'react';
import { BLOG_POSTS } from '../data';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white animate-fade-in py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-slate-900 mb-4">{t('blog.title')}</h1>
            <p className="text-slate-500">{t('blog.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
                <article key={post.id} className="flex flex-col group cursor-pointer">
                    <div className="aspect-video overflow-hidden rounded-sm mb-4 relative">
                        <img 
                            src={post.imageUrl} 
                            alt={language === 'ru' && post.title_ru ? post.title_ru : post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-900 flex items-center gap-2 rounded-sm">
                            <Calendar size={12} />
                            {language === 'ru' && post.date_ru ? post.date_ru : post.date}
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                        {language === 'ru' && post.title_ru ? post.title_ru : post.title}
                    </h2>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {language === 'ru' && post.excerpt_ru ? post.excerpt_ru : post.excerpt}
                    </p>
                    <div className="flex items-center text-orange-600 font-bold text-sm mt-auto">
                        {t('blog.read_more')} <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform"/>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;