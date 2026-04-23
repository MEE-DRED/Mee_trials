import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="bg-white text-dwm-text-dark">
      <section className="bg-dwm-green-pale px-6 py-12 md:px-16 md:py-16 border-b border-primary/10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-sm text-dwm-text-mid md:text-base">
            <Link to="/" className="text-accent transition duration-300 hover:text-[#b58226]">Home</Link> &#8250; Privacy Policy
          </div>
          <h1 className="mb-4 text-3xl font-semibold text-primary md:text-5xl">Privacy Policy</h1>
          <p className="text-base text-dwm-text-mid md:text-xl">
            How DineWithMee collects, uses, and protects your personal and health-related data.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-primary/10 bg-white p-6 shadow-premium-sm md:p-10">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">Data We Collect</h2>
            <p className="leading-relaxed text-dwm-text-mid">
              We collect account data, preference information, and optional health context required to personalize care pathways.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">How We Use Data</h2>
            <p className="leading-relaxed text-dwm-text-mid">
              Data is used to power nutrition recommendations, improve platform quality, and support service operations.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">Security and Access</h2>
            <p className="leading-relaxed text-dwm-text-mid">
              We apply technical and operational controls to safeguard user information and limit internal access based on roles.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">Policy Questions</h2>
            <p className="leading-relaxed text-dwm-text-mid">
              For privacy requests, reach out via our <Link to="/contact" className="text-accent hover:text-[#b58226]">Contact</Link> page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
