import React from 'react';

const Programs = () => {
  return (
    <div className="bg-white text-dwm-text-dark px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-5">
          Evidence-based pathways
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
          Clinical Programs
        </h1>
        <p className="text-base md:text-xl text-dwm-text-mid leading-relaxed max-w-3xl mx-auto">
          Explore our evidence-based nutrition programs
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Diabetes Care', 'Maternal Wellness', 'Weight Management'].map((item) => (
          <div key={item} className="rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-primary mb-3">{item}</h2>
            <p className="text-dwm-text-mid leading-relaxed">Structured nutrition support with culturally relevant meals and clear guidance.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
