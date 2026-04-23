import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="bg-white text-dwm-text-dark">
      <section className="bg-dwm-green-pale px-6 py-12 md:px-16 md:py-16 border-b border-primary/10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-sm text-dwm-text-mid md:text-base">
            <Link to="/" className="text-accent transition duration-300 hover:text-[#b58226]">Home</Link> &#8250; Settings
          </div>
          <h1 className="mb-4 text-3xl font-semibold text-primary md:text-5xl">Account Settings</h1>
          <p className="text-base text-dwm-text-mid md:text-xl">
            Central place for personal preferences, notifications, privacy controls, and account management.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-primary/10 bg-white p-6 shadow-premium-sm">
            <h2 className="mb-2 text-lg font-semibold text-primary">Profile Preferences</h2>
            <p className="text-dwm-text-mid">Update profile identity, dietary goals, and communication details.</p>
          </article>
          <article className="rounded-2xl border border-primary/10 bg-white p-6 shadow-premium-sm">
            <h2 className="mb-2 text-lg font-semibold text-primary">Notifications</h2>
            <p className="text-dwm-text-mid">Control reminders for consultations, meal plans, and order updates.</p>
          </article>
          <article className="rounded-2xl border border-primary/10 bg-white p-6 shadow-premium-sm">
            <h2 className="mb-2 text-lg font-semibold text-primary">Privacy Controls</h2>
            <p className="text-dwm-text-mid">Manage data visibility and connected care-team access options.</p>
          </article>
          <article className="rounded-2xl border border-primary/10 bg-white p-6 shadow-premium-sm">
            <h2 className="mb-2 text-lg font-semibold text-primary">Security</h2>
            <p className="text-dwm-text-mid">Update password and protect account access from unauthorized activity.</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Settings;
