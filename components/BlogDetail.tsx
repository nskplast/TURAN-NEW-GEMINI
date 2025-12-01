
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const title = language === 'ru' && post.title_ru ? post.title_ru : post.title;
  const date = language === 'ru' && post.date_ru ? post.date_ru : post.date;
  // Fallback to excerpt if content is missing, though we populated content in data.ts
  const contentHtml = language === 'ru' 
    ? (post.content_ru || `<p>${post.excerpt_ru}</p>`) 
    : (post.content || `<p>${post.excerpt}</p>`);

  return (
    <div className="min-h-screen bg-slate-50 animate-fade-in pb-20">
      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 relative bg-slate-900">
         <img 
            src={post.imageUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-60"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full p-4 md:p-12">
             <div className="container mx-auto">
                <Link to="/blog" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors font-bold text-sm uppercase tracking-wider">
                    <ArrowLeft size={16} className="mr-2"/> {language === 'ru' ? 'Назад в блог' : 'Back to Blog'}
                </Link>
                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 shadow-sm">{title}</h1>
                <div className="flex items-center gap-6 text-slate-300 text-sm font-medium">
                    <span className="flex items-center gap-2"><Calendar size={16}/> {date}</span>
                    <span className="flex items-center gap-2"><Clock size={16}/> {language === 'ru' ? '3 мин чтения' : '3 min read'}</span>
                </div>
             </div>
         </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-12 max-w-4xl mx-auto border border-slate-100">
              <article 
                className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-img:rounded-lg"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
              
              <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Share this:</span>
                  <div className="flex gap-4">
                      {/* Social placeholders */}
                      <button className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</button>
                      <button className="text-slate-400 hover:text-blue-500 transition-colors">Twitter</button>
                      <button className="text-slate-400 hover:text-blue-700 transition-colors">Facebook</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BlogDetail;
