import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white text-dwm-text-dark px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-5">
          Account settings
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
          Profile
        </h1>
        <p className="text-base md:text-xl text-dwm-text-mid leading-relaxed max-w-3xl mx-auto">
          Manage your account settings
        </p>
        <div className="max-w-4xl mx-auto mt-12 rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 md:p-8 shadow-md text-left">
          <h2 className="text-xl font-semibold text-primary mb-3">Profile readiness</h2>
          <p className="text-dwm-text-mid leading-relaxed">Keep your personal information, preferences, and health details updated so recommendations stay relevant.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
