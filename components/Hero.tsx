
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+44',
    phone: '',
    email: '',
    treatment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead submitted:', formData);
    alert('Thank you! Our dental consultants will contact you soon.');
  };

  return (
    <section className="relative w-full min-h-[700px] flex items-center bg-gray-50 overflow-hidden">
      {/* Background with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXaHPTwziuKc5DX2Asz2h0YyF5MA7e_qvfI9RM2X8f3Cmg6jtFAtMm_Len_5gUja4DTBC7hcH32GB3PGVuGBjnyXW4Fwr694wgHtW-zhubonF7u-Y8Mb4FaYzTlyIccAD81SBQmWy_8cNomlcpBbhHtszO-7AUq8MLas9Oi9WeTs7sP9L4S_JtxUFW9vsKBs0FeUmPIzdTCOWePhLd9-e0Xl6kKo37uQHpD9bqe7_6xY6mn8rIb0JpyNhaORuH7QJvjfvZWk4E5A"
          alt="Istanbul cityscape"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-4 lg:px-20 xl:px-40 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <div className="flex-1 space-y-6 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
              <span className="material-symbols-outlined text-sm">flight_takeoff</span>
              Dental Tourism Experts
            </div>
            <h1 className="text-[#181611] tracking-tight text-4xl lg:text-6xl font-bold leading-[1.1]">
              Your Hollywood Smile, <br/> 
              <span className="text-primary italic">Made in Istanbul.</span>
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
              Save up to 70% on premium dental implants, veneers, and crowns while enjoying a luxury vacation in Türkiye. 
              <span className="font-semibold text-gray-800"> Top-rated clinics, lifetime warranty.</span>
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary fill-icon">star</span>
                <span className="text-sm font-semibold text-gray-700">4.9/5 on Trustpilot</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="text-sm font-semibold text-gray-700">ISO 9001 Certified</span>
              </div>
            </div>
          </div>

          {/* Right: Lead Form Card */}
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#181611] mb-1">Free Treatment Plan</h3>
                <p className="text-sm text-gray-500">Expert dentists will review your case within 24h.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">person</span>
                  <input 
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-10 h-12 rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:ring-primary focus:border-primary text-sm transition-all"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <select 
                    className="col-span-1 h-12 rounded-lg border-gray-200 bg-gray-50 text-sm focus:ring-primary focus:border-primary"
                    value={formData.countryCode}
                    onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                  >
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+90">🇹🇷 +90</option>
                  </select>
                  <input 
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="col-span-2 h-12 rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:ring-primary focus:border-primary text-sm transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">mail</span>
                  <input 
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-10 h-12 rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:ring-primary focus:border-primary text-sm transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">dentistry</span>
                  <select 
                    required
                    className="w-full pl-10 h-12 rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:ring-primary focus:border-primary text-sm transition-all"
                    value={formData.treatment}
                    onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                  >
                    <option value="" disabled>Select Treatment...</option>
                    <option value="implants">Dental Implants</option>
                    <option value="veneers">Veneers / Hollywood Smile</option>
                    <option value="crowns">Zirconium Crowns</option>
                    <option value="whitening">Teeth Whitening</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="mt-2 w-full h-12 bg-primary hover:bg-primary-hover text-[#181611] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Send Me a Quote
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                
                <p className="text-[11px] text-center text-gray-400 mt-2 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">lock</span> 
                  Your data is 100% secure. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
