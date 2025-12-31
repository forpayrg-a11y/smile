
import React from 'react';

const TrustIndicators: React.FC = () => {
  const indicators = [
    { icon: 'verified', label: 'Certified', value: 'ISO 9001:2015', color: 'text-blue-600' },
    { icon: 'medical_services', label: 'Accredited by', value: 'Ministry of Health', color: 'text-red-600' },
    { icon: 'hotel_class', label: 'Included', value: '5-Star Hotel', color: 'text-primary' },
    { icon: 'airport_shuttle', label: 'Free Service', value: 'VIP Transfer', color: 'text-gray-900' }
  ];

  return (
    <div className="bg-white border-y border-gray-100 shadow-sm">
      <div className="px-4 lg:px-20 xl:px-40 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {indicators.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group cursor-default">
              <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-4xl lg:text-5xl">{item.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] lg:text-xs text-gray-500 uppercase font-bold tracking-widest">{item.label}</span>
                <span className="text-sm lg:text-base font-bold text-[#181611]">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
