import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Box, Settings } from 'lucide-react';
import { getPackagingAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../contexts/LanguageContext';

const SUGGESTED_QUESTIONS_EN = [
  "What is the break strength of 19mm PET?",
  "Difference between PET and Steel strap?",
  "Best tool for heavy brick pallets?"
];

const SUGGESTED_QUESTIONS_RU = [
  "Какая разрывная нагрузка у 19мм ПЭТ?",
  "В чем разница между ПЭТ и сталью?",
  "Какой инструмент нужен для кирпича?"
];

const AICareAssistant: React.FC = () => {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
        role: 'model', 
        text: language === 'ru' 
            ? "Здравствуйте. Я **StrapMaster**, ваш консультант по промышленной упаковке. Я помогу с расчетами нагрузок и подбором ленты. Чем могу помочь?" 
            : "Hello. I am **StrapMaster**, your industrial packaging consultant. I can assist with load containment calculations and tool selection. How can I help secure your cargo today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // We might want to append language context to the prompt in a real scenario
      const promptWithLang = language === 'ru' 
        ? `${textToSend} (Please answer in Russian language)` 
        : textToSend;

      const responseText = await getPackagingAdvice(promptWithLang);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
          role: 'model', 
          text: language === 'ru' ? "Ошибка связи с сервером." : "Communication error with logistics server.", 
          isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-140px)] max-h-[800px] flex flex-col bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-800 p-4 md:p-6 flex items-center space-x-3 text-white shadow-md z-10 border-b-4 border-orange-500">
        <div className="bg-white/10 p-2 rounded">
          <Bot size={24} />
        </div>
        <div>
          <h2 className="font-bold text-lg tracking-wide">{language === 'ru' ? 'AI ЭКСПЕРТ' : 'PACKAGING EXPERT AI'}</h2>
          <p className="text-slate-400 text-xs">{language === 'ru' ? 'Поддержка Логистики' : 'Logistics & Engineering Support'}</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[85%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
              
              {/* Avatar */}
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded flex-shrink-0 flex items-center justify-center shadow-sm ${
                msg.role === 'user' ? 'bg-orange-600 text-white' : 'bg-slate-700 text-white'
              }`}>
                {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>

              {/* Bubble */}
              <div className={`p-3 md:p-4 rounded-lg shadow-sm text-sm md:text-base leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-orange-600 text-white' 
                  : msg.isError 
                    ? 'bg-red-50 text-red-600 border border-red-100'
                    : 'bg-white text-slate-800 border border-slate-200'
              }`}>
                 {msg.role === 'model' ? (
                    <ReactMarkdown 
                        components={{
                            ul: ({node, ...props}) => <ul className="list-disc ml-4 my-2 space-y-1 text-slate-600" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />
                        }}
                    >
                        {msg.text}
                    </ReactMarkdown>
                 ) : (
                     msg.text
                 )}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start w-full">
             <div className="flex flex-row gap-3">
                <div className="w-10 h-10 rounded bg-slate-700 flex items-center justify-center text-white animate-pulse">
                   <Settings size={18} className="animate-spin" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions (only show if few messages) */}
      {messages.length < 3 && (
        <div className="px-6 py-2 bg-slate-50 flex gap-2 overflow-x-auto scrollbar-hide">
          {(language === 'ru' ? SUGGESTED_QUESTIONS_RU : SUGGESTED_QUESTIONS_EN).map((q, i) => (
            <button 
              key={i}
              onClick={() => handleSend(q)}
              className="whitespace-nowrap px-3 py-1 bg-white border border-slate-300 rounded text-xs text-slate-600 hover:bg-slate-800 hover:text-white transition-colors font-medium"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex items-center space-x-2 max-w-4xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={language === 'ru' ? "Задайте технический вопрос..." : "Enter technical query..."}
            className="flex-1 bg-slate-100 text-slate-800 placeholder-slate-400 px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all font-mono text-sm"
            disabled={isLoading}
          />
          <button 
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="bg-orange-600 text-white p-3 rounded hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICareAssistant;