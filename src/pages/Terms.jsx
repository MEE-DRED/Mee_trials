import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="bg-white text-dwm-text-dark">
      <section className="bg-dwm-green-pale px-6 py-12 md:px-16 md:py-16 border-b border-primary/10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-sm text-dwm-text-mid md:text-base">
            <Link to="/" className="text-accent transition duration-300 hover:text-[#b58226]">Home</Link> &#8250; Terms of Service
          </div>
          <h1 className="mb-4 text-3xl font-semibold text-primary md:text-5xl">Terms of Service</h1>
          <p className="text-base text-dwm-text-mid md:text-xl">
            These terms govern your access to DineWithMee services, programs, and digital tools.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-primary/10 bg-white p-6 shadow-premium-sm md:p-10">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">Platform Use</h2>
            <p className="leading-relaxed text-dwm-text-mid">
              You agree to use DineWithMee responsibly and provide accurate health information where required for personalized guidance.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">Clinical Guidance Scope</h2>
            <p className="leading-relaxed text-dwm-text-mid">
              The platform provides nutrition-focused recommendations and does not replace emergency medical care or direct physician diagnosis.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">Accounts and Security</h2>
            <p className="leading-relaxed text-dwm-text-mid">
              You are responsible for maintaining confidentiality of your account credentials and activities under your profile.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">Contact</h2>
            <p className="leading-relaxed text-dwm-text-mid">
              Questions about these terms can be directed through our <Link to="/contact" className="text-accent hover:text-[#b58226]">Contact</Link> page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
