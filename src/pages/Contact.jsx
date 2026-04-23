import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-dwm-text-dark px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-5">
          Get in touch
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
          Contact Us
        </h1>
        <p className="text-base md:text-xl text-dwm-text-mid mb-8 leading-relaxed max-w-3xl mx-auto">
          Get in touch with the Dine with Mee team
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
          <div className="rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-primary mb-2">Support</h2>
            <p className="text-dwm-text-mid leading-relaxed">Reach out for account help, ordering support, or product questions.</p>
          </div>
          <div className="rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-primary mb-2">Partnerships</h2>
            <p className="text-dwm-text-mid leading-relaxed">Connect with the team about chefs, clinical partners, and collaborations.</p>
          </div>
          <div className="rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-primary mb-2">Media & Research</h2>
            <p className="text-dwm-text-mid leading-relaxed">Contact us for press, research, and educational inquiries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
