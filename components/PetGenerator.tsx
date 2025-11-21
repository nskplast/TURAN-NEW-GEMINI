import React, { useState } from 'react';
import { ImageGenerationState } from '../types';
import { generateIndustrialImage } from '../services/geminiService';
import { Sparkles, Download, RefreshCw, Image as ImageIcon, PackageOpen } from 'lucide-react';

const PetGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [state, setState] = useState<ImageGenerationState>({
    isLoading: false,
    resultUrl: null,
    error: null
  });

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setState({ isLoading: true, resultUrl: null, error: null });
    
    try {
      const url = await generateIndustrialImage(prompt);
      setState({ isLoading: false, resultUrl: url, error: null });
    } catch (err) {
      setState({ isLoading: false, resultUrl: null, error: "Failed to generate visualization." });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
         <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-2">
            <span className="bg-slate-200 text-slate-700 p-2 rounded"><PackageOpen size={28} /></span>
            Logistics Visualizer
         </h2>
         <p className="text-slate-600">Visualize warehouse layouts, pallet configurations, and strap applications.</p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder="e.g., Automatic strapping machine on a conveyor belt, industrial warehouse"
            className="flex-1 bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
          <button
            onClick={handleGenerate}
            disabled={state.isLoading || !prompt.trim()}
            className="bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-700 disabled:opacity-70 transition-all shadow-md font-bold flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {state.isLoading ? (
              <RefreshCw className="animate-spin" size={20} />
            ) : (
              <Sparkles size={20} />
            )}
            {state.isLoading ? 'Rendering...' : 'Visualize'}
          </button>
        </div>

        {/* Error Message */}
        {state.error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded border border-red-100 text-center">
            {state.error}
          </div>
        )}
        
        {/* Display Area */}
        <div className="mt-8 min-h-[300px] md:min-h-[400px] w-full bg-slate-100 rounded flex items-center justify-center overflow-hidden relative border-2 border-dashed border-slate-300">
           {state.isLoading ? (
             <div className="text-center space-y-4">
               <div className="w-16 h-16 border-4 border-slate-300 border-t-orange-600 rounded-full animate-spin mx-auto"></div>
               <p className="text-slate-500 animate-pulse font-mono">Generating schematic...</p>
             </div>
           ) : state.resultUrl ? (
             <div className="relative group w-full h-full">
               <img 
                 src={state.resultUrl} 
                 alt="Generated Logistics Scene" 
                 className="w-full h-full object-contain bg-slate-900"
               />
               <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <a 
                   href={state.resultUrl} 
                   download="petstrap-logistics.png"
                   className="bg-white/90 backdrop-blur text-slate-900 p-3 rounded shadow-lg hover:bg-white flex items-center gap-2 font-bold text-sm"
                 >
                   <Download size={18} />
                   Export
                 </a>
               </div>
             </div>
           ) : (
             <div className="text-center text-slate-400 p-8">
               <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
               <p>Enter a packaging scenario above.</p>
             </div>
           )}
        </div>
        
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
           <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 pt-1">Examples:</span>
           {['Stacks of lumber secured with green PET strap', 'Forklift moving pallet in large warehouse', 'Worker using battery strapping tool'].map(suggestion => (
             <button 
               key={suggestion}
               onClick={() => setPrompt(suggestion)}
               className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 px-3 py-1 rounded transition-colors border border-slate-200"
             >
               {suggestion}
             </button>
           ))}
        </div>
      </div>
    </div>
  );
};

export default PetGenerator;