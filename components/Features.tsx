
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="px-4 lg:px-20 xl:px-40 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#181611] tracking-tight">Why Choose IstanbulSmile?</h2>
          <p className="text-gray-600 text-lg">
            We combine world-class dental care with a premium Turkish hospitality experience to give you the perfect smile you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="group p-8 rounded-2xl bg-[#f8f8f5] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-primary/20 duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                <span className={`material-symbols-outlined text-4xl ${feature.iconColor}`}>{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#181611] mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
