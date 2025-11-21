import React from 'react';
import { ToolProduct } from '../types';
import { ShoppingCart, Star, Wrench, Battery, Shield } from 'lucide-react';

const TOOLS: ToolProduct[] = [
  { id: '1', name: 'B-400 Battery Powered Tool', category: 'Friction Weld', price: 1250.00, rating: 5.0, imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=80' },
  { id: '2', name: 'Pneumatic Tensioner', category: 'Pneumatic', price: 450.00, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80' },
  { id: '3', name: 'H-21 Heavy Duty Tensioner', category: 'Manual', price: 85.00, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&q=80' },
  { id: '4', name: 'C-3004 Heavy Sealer', category: 'Manual', price: 95.00, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=500&q=80' },
  { id: '5', name: 'Premium Dispenser Cart', category: 'Accessories', price: 220.00, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=500&q=80' },
  { id: '6', name: 'Serrated Metal Seals (1000pk)', category: 'Consumables', price: 65.00, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1605317580181-898705262b8f?auto=format&fit=crop&w=500&q=80' },
];

const Shop: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-slate-200 pb-6">
        <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-800">Application Tools</h2>
            <p className="text-slate-600">Professional grade equipment for high-volume strapping operations.</p>
        </div>
        <button className="bg-orange-600 text-white px-6 py-2 rounded font-bold text-sm hover:bg-orange-700 transition-colors flex items-center gap-2 mt-4 md:mt-0 shadow-sm">
            <ShoppingCart size={16} />
            <span>Quote Request (0)</span>
        </button>
      </div>

      {/* Feature Banner */}
      <div className="bg-slate-800 text-white rounded p-6 flex items-center justify-between border-l-4 border-orange-500">
         <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 rounded">
                <Wrench size={24} />
            </div>
            <div>
                <h4 className="font-bold">Service & Repair</h4>
                <p className="text-sm text-slate-400">We service all major tool brands.</p>
            </div>
         </div>
         <div className="hidden sm:flex items-center space-x-4 border-l border-slate-700 pl-6">
             <div className="p-3 bg-white/10 rounded">
                <Battery size={24} />
            </div>
            <div>
                <h4 className="font-bold">Spare Batteries</h4>
                <p className="text-sm text-slate-400">Keep your operation running 24/7.</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS.map((product) => (
          <div key={product.id} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-slate-200">
            <div className="relative h-64 overflow-hidden bg-white">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-slate-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                {product.category}
              </div>
            </div>
            <div className="p-5 space-y-3">
               <div className="flex justify-between items-start">
                 <h3 className="font-bold text-lg text-slate-800 leading-tight">{product.name}</h3>
                 <div className="flex items-center text-orange-500 text-xs font-bold bg-orange-50 px-2 py-1 rounded border border-orange-100">
                    <Star size={12} fill="currentColor" className="mr-1"/>
                    {product.rating}
                 </div>
               </div>
               <div className="flex justify-between items-center pt-2">
                 <span className="text-xl font-bold text-slate-900">${product.price}</span>
                 <button className="bg-slate-800 text-white p-2 rounded hover:bg-orange-600 transition-colors shadow-sm">
                    <ShoppingCart size={20} />
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Promo Banner */}
      <div className="bg-orange-600 rounded p-8 md:p-12 text-center text-white relative overflow-hidden mt-12">
          <div className="relative z-10 space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold uppercase">Equip Your Team</h3>
              <p className="text-orange-100">Bulk tool orders include free on-site training.</p>
              <div className="inline-block bg-black/20 px-6 py-3 rounded font-mono text-white font-bold tracking-widest mt-2 border border-white/20">
                  REQUEST DEMO
              </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 -mr-16 -mt-16"></div>
      </div>
    </div>
  );
};

export default Shop;