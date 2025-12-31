
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-secondary py-24 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

      <div className="px-4 lg:px-20 xl:px-40 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-white text-3xl lg:text-5xl font-bold tracking-tight">Ready to Transform Your Smile?</h2>
          <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
            Get a 100% free digital consultation and treatment plan from our expert dentists. 
            Start your journey towards a brighter future today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button className="bg-primary hover:bg-primary-hover text-[#181611] font-bold py-5 px-10 rounded-xl transition-all transform hover:scale-105 text-lg shadow-xl active:scale-95">
              Get Free Quote
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-10 rounded-xl transition-all transform hover:scale-105 text-lg flex items-center justify-center gap-3 backdrop-blur-md border border-white/10">
              <span className="material-symbols-outlined fill-icon text-primary">call</span>
              +90 555 123 4567
            </button>
          </div>
          
          <div className="pt-8 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
              <span className="text-gray-400 text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
              <span className="text-gray-400 text-sm">No Obligations</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
              <span className="text-gray-400 text-sm">24h Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
