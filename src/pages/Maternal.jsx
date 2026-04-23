import React from 'react';

const Maternal = () => {
  return (
    <div className="bg-white text-dwm-text-dark px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-5">
          Maternal wellness
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
          Maternal Health
        </h1>
        <p className="text-base md:text-xl text-dwm-text-mid leading-relaxed max-w-3xl mx-auto">
          Nutrition support for mothers and babies
        </p>
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-primary mb-2">Pregnancy support</h2>
            <p className="text-dwm-text-mid leading-relaxed">Balanced nutrition guidance for each stage of pregnancy and postpartum care.</p>
          </div>
          <div className="rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-primary mb-2">Family health</h2>
            <p className="text-dwm-text-mid leading-relaxed">Practical meal support that helps mothers and babies thrive together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maternal;
