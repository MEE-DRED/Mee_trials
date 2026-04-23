import React from 'react';
import { Link } from 'react-router-dom';

const Health = () => {
  return (
    <div className="bg-white text-dwm-text-dark">
      <section className="border-b border-primary/10 bg-dwm-green-pale px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-sm text-dwm-text-mid md:text-base">
            <Link to="/" className="text-accent transition duration-300 hover:text-[#b58226]">Home</Link> &#8250; Health Hub
          </div>
          <h1 className="mb-4 text-3xl font-semibold text-primary md:text-5xl">Health Hub</h1>
          <p className="text-base leading-relaxed text-dwm-text-mid md:text-xl">
            Condition-focused care, maternal nutrition pathways, and research-backed guidance in one connected journey.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 md:px-16 md:py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          <a href="#diabetes" className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">Diabetes</a>
          <a href="#hypertension" className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">Hypertension</a>
          <a href="#maternal-care-pathway" className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">Maternal Care</a>
          <a href="#obesity" className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">Weight Management</a>
          <a href="#nutrition-research" className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">Nutrition Research</a>
        </div>
      </section>

      <section id="diabetes" className="px-6 py-10 md:px-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-primary/10 bg-white p-6 shadow-premium-sm md:p-10">
          <h2 className="mb-3 text-2xl font-semibold text-primary">Diabetes Care</h2>
          <p className="leading-relaxed text-dwm-text-mid">
            Meal guidance designed for glycemic control with local food familiarity, portion planning, and consistent follow-up support.
          </p>
        </div>
      </section>

      <section id="hypertension" className="bg-dwm-off-white/60 px-6 py-10 md:px-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-primary/10 bg-white p-6 shadow-premium-sm md:p-10">
          <h2 className="mb-3 text-2xl font-semibold text-primary">Hypertension Support</h2>
          <p className="leading-relaxed text-dwm-text-mid">
            Sodium-aware nutrition pathways, practical swaps, and adherence coaching integrated with your clinical care goals.
          </p>
        </div>
      </section>

      <section id="maternal-care-pathway" className="px-6 py-10 md:px-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-primary/10 bg-white p-6 shadow-premium-sm md:p-10">
          <h2 className="mb-3 text-2xl font-semibold text-primary">Maternal Care Pathway</h2>
          <p className="leading-relaxed text-dwm-text-mid">
            Nutrition support for preconception, pregnancy, and postpartum stages with culturally relevant meals and practical planning.
          </p>
          <div className="mt-6">
            <Link to="/maternal" className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
              Explore Maternal Program
            </Link>
          </div>
        </div>
      </section>

      <section id="obesity" className="bg-dwm-off-white/60 px-6 py-10 md:px-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-primary/10 bg-white p-6 shadow-premium-sm md:p-10">
          <h2 className="mb-3 text-2xl font-semibold text-primary">Weight Management</h2>
          <p className="leading-relaxed text-dwm-text-mid">
            Structured pathways for sustainable body composition improvement using realistic meal routines and behavior-centered coaching.
          </p>
        </div>
      </section>

      <section id="nutrition-research" className="px-6 py-10 md:px-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-primary/10 bg-white p-6 shadow-premium-sm md:p-10">
          <h2 className="mb-3 text-2xl font-semibold text-primary">Nutrition Research</h2>
          <p className="leading-relaxed text-dwm-text-mid">
            Evidence translation engine turning clinically informed nutrition findings into practical African meal recommendations.
          </p>
          <div className="mt-6">
            <Link to="/research" className="inline-flex items-center justify-center rounded-xl border border-primary/20 bg-white px-5 py-3 text-sm font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">
              View Research Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;
