import React, { useState } from 'react';
import { StrapProduct } from '../types';
import { Filter, Info, Download } from 'lucide-react';

const PRODUCTS: StrapProduct[] = [
  { id: '1', name: 'Green Embossed PET - 16mm', width: '16mm (5/8")', thickness: '0.035"', breakStrength: '1,400 lbs', type: 'PET', imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=500&q=80', description: 'Standard duty embossed strap for brick, block, and general palletizing.', price: 45.00 },
  { id: '2', name: 'Smooth Green PET - 19mm', width: '19mm (3/4")', thickness: '0.040"', breakStrength: '2,200 lbs', type: 'PET', imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&w=500&q=80', description: 'High-strength smooth strap for heavy lumber and steel applications.', price: 62.50 },
  { id: '3', name: 'Polypropylene Machine Grade', width: '12mm (1/2")', thickness: '0.022"', breakStrength: '600 lbs', type: 'PP', imageUrl: 'https://images.unsplash.com/photo-1595587877958-6e9cb1b60138?auto=format&fit=crop&w=500&q=80', description: 'Economical white strap for fully automatic strapping machines.', price: 32.00 },
  { id: '4', name: 'Woven Cord Strapping', width: '19mm (3/4")', thickness: 'Heavy Duty', breakStrength: '2,425 lbs', type: 'Cord', imageUrl: 'https://images.unsplash.com/photo-1520694478166-daaaa511d1e8?auto=format&fit=crop&w=500&q=80', description: 'Soft but strong polyester cord. Safe on hands, great for outdoor storage.', price: 55.00 },
  { id: '5', name: 'Steel Banding - Black', width: '19mm (3/4")', thickness: '0.020"', breakStrength: '2,600 lbs', type: 'Steel', imageUrl: 'https://images.unsplash.com/photo-1533750088811-7a8b16218a58?auto=format&fit=crop&w=500&q=80', description: 'Traditional oscillating wound steel for extremely hot or sharp loads.', price: 85.00 },
  { id: '6', name: 'Composite Cord Strap', width: '25mm (1")', thickness: 'Extra Heavy', breakStrength: '3,300 lbs', type: 'Cord', imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80', description: 'Coated polyester cord. Weather resistant and re-tensionable.', price: 78.00 },
];

const AdoptionFeed: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'PET' | 'PP' | 'Steel' | 'Cord'>('All');

  const filteredProducts = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.type === filter);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-slate-900 text-white p-8 rounded-lg text-center space-y-4">
        <h2 className="text-3xl font-bold">Strapping Inventory</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Direct from manufacturer. Bulk pallet discounts available.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center space-x-2 overflow-x-auto py-2">
        {['All', 'PET', 'PP', 'Steel', 'Cord'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as any)}
            className={`px-6 py-2 rounded-sm text-sm font-bold transition-colors whitespace-nowrap border ${
              filter === type 
                ? 'bg-orange-600 text-white border-orange-600' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
            }`}
          >
            {type === 'All' ? 'All Materials' : type}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-200 group">
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-0 right-0 bg-orange-600 text-white px-3 py-1 text-xs font-bold uppercase">
                {product.type}
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{product.name}</h3>
                  <p className="text-slate-500 text-sm">{product.width} width</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-sm border border-slate-100">
                  <div>
                      <span className="block text-slate-400">Break Strength</span>
                      <span className="font-bold">{product.breakStrength}</span>
                  </div>
                  <div>
                      <span className="block text-slate-400">Thickness</span>
                      <span className="font-bold">{product.thickness}</span>
                  </div>
              </div>

              <p className="text-slate-500 text-sm line-clamp-2">{product.description}</p>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                 <span className="text-xl font-bold text-slate-900">${product.price} <span className="text-xs font-normal text-slate-400">/ coil</span></span>
                 <button className="text-orange-600 font-bold text-sm hover:underline flex items-center">
                    <Download size={16} className="mr-1" /> Spec Sheet
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptionFeed;