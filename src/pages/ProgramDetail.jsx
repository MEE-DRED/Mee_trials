import React from 'react';

const ProgramDetail = () => {
  return (
    <div className="bg-white text-dwm-text-dark px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-5">
          Program overview
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
          Program Details
        </h1>
        <p className="text-base md:text-xl text-dwm-text-mid leading-relaxed max-w-3xl mx-auto">
          Learn more about this program
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 md:p-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-3">What’s included</h2>
            <p className="text-dwm-text-mid leading-relaxed">Meal planning, progress support, and a practical framework that connects nutrition to the real conditions it serves.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary mb-3">Designed for</h2>
            <p className="text-dwm-text-mid leading-relaxed">Users who want structured guidance, culturally familiar meals, and a more confident daily routine.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
