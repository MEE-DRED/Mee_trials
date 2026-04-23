import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white text-dwm-text-dark px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-5">
          Personal workspace
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
          Welcome back, {user?.name || 'User'}!
        </h1>
        <p className="text-base md:text-xl text-dwm-text-mid leading-relaxed max-w-3xl mx-auto">
          Your personal health dashboard
        </p>
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-primary mb-2">Overview</h2>
            <p className="text-dwm-text-mid leading-relaxed">Track key health progress and recent actions from a clean, focused view.</p>
          </div>
          <div className="rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-primary mb-2">Nutrition</h2>
            <p className="text-dwm-text-mid leading-relaxed">Stay aligned with meal recommendations and care guidance built around your profile.</p>
          </div>
          <div className="rounded-2xl border border-primary/10 bg-dwm-off-white/60 p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-primary mb-2">Next steps</h2>
            <p className="text-dwm-text-mid leading-relaxed">Continue into your assessments, plans, and consultations with confidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
