
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#f5f3f0] shadow-sm">
      <div className="px-4 lg:px-20 xl:px-40 py-3">
        <header className="flex items-center justify-between whitespace-nowrap">
          {/* Logo */}
          <div className="flex items-center gap-2 text-[#181611]">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl fill-icon">dentistry</span>
            </div>
            <h2 className="text-[#181611] text-xl font-bold leading-tight tracking-[-0.015em]">IstanbulSmile</h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <a className="text-[#181611] text-sm font-medium hover:text-primary transition-colors" href="#">Treatments</a>
            <a className="text-[#181611] text-sm font-medium hover:text-primary transition-colors" href="#">Gallery</a>
            <a className="text-[#181611] text-sm font-medium hover:text-primary transition-colors" href="#">Costs</a>
            <a className="text-[#181611] text-sm font-medium hover:text-primary transition-colors" href="#">FAQ</a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-primary-hover text-[#181611] text-sm font-bold transition-all transform active:scale-95 shadow-sm">
              <span className="truncate">Get Free Quote</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg size-10 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </button>
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
