import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '../../context/AuthContext';
import { 
  fetchAllUsers, 
  selectUsers,
  selectUsersLoading,
  fetchUserAnalytics,
  selectUserAnalytics
} from '../../redux';
import ClientList from '../../components/consultation/ClientList';
import ConsultationSchedule from '../../components/consultation/ConsultationSchedule';
import AnalyticsWidget from '../../components/dashboard/AnalyticsWidget';

const NutritionistDashboard = () => {
  const dispatch = useDispatch();
  const { user, hasRole } = useAuth();
  
  // Redux state
  const clients = useSelector(selectUsers);
  const clientsLoading = useSelector(selectUsersLoading);
  const analytics = useSelector(selectUserAnalytics);

  useEffect(() => {
    if (hasRole('NUTRITIONIST')) {
      dispatch(fetchAllUsers({ role: 'CUSTOMER' })); // Get only customer clients
      dispatch(fetchUserAnalytics());
    }
  }, [dispatch, hasRole]);

  if (!hasRole('NUTRITIONIST')) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Access denied. Nutritionist dashboard only.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-dwm-text-dark">
      <div className="bg-dwm-green-pale px-6 md:px-16 py-12 md:py-16 border-b border-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-4">
                Practice workspace
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                Nutritionist Dashboard
              </h1>
              <p className="text-dwm-text-mid mt-2 leading-relaxed">
                Manage your clients and consultations
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-sm text-dwm-text-mid">
                Professional Status: 
                <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Analytics Overview */}
          <div className="mb-8">
            <AnalyticsWidget 
              analytics={analytics}
              loading={clientsLoading}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Client Management */}
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  👥 My Clients
                </h2>
                <ClientList 
                  clients={clients}
                  loading={clientsLoading}
                />
              </div>
            </div>

            {/* Consultation Schedule */}
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  📅 Today's Schedule
                </h2>
                <ConsultationSchedule 
                  nutritionistId={user?.id}
                />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  👤 Client Profiles
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  View detailed health profiles
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  View All
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  📋 Meal Planning
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Create custom meal plans
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Create Plan
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  📊 Reports
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Generate client progress reports
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Generate Report
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  💬 Messages
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Client communications
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  View Messages
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionistDashboard;
