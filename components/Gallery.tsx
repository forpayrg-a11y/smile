
import React from 'react';
import { TREATMENT_CASES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="px-4 lg:px-20 xl:px-40 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl space-y-2">
            <span className="text-primary font-bold text-sm tracking-widest uppercase block">Transformations</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#181611] tracking-tight leading-tight">Real Patient Results</h2>
            <p className="text-gray-500 text-lg">See the life-changing results of our bespoke dental treatments.</p>
          </div>
          <button className="flex items-center gap-2 text-[#181611] font-bold hover:text-primary transition-colors group">
            View Full Gallery 
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {TREATMENT_CASES.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group">
              <div className="relative h-72 flex overflow-hidden">
                {/* Before Image */}
                <div className="w-1/2 relative h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                  <img 
                    className="w-full h-full object-cover filter grayscale" 
                    src={item.beforeImage} 
                    alt={`${item.title} Before`}
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white text-[10px] font-bold tracking-widest px-2 py-1 rounded backdrop-blur-sm">BEFORE</div>
                </div>
                
                {/* After Image */}
                <div className="w-1/2 relative h-full border-l-2 border-white group-hover:scale-105 transition-transform duration-700 ease-out">
                  <img 
                    className="w-full h-full object-cover" 
                    src={item.afterImage} 
                    alt={`${item.title} After`}
                  />
                  <div className="absolute top-4 right-4 bg-primary text-[#181611] text-[10px] font-bold tracking-widest px-2 py-1 rounded shadow-sm">AFTER</div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-1 text-[#181611]">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium">{item.description}</p>
                <div className="mt-4 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full bg-primary transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
