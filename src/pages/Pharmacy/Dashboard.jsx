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
import PatientList from '../../components/consultation/PatientList';
import MedicationManagement from '../../components/dashboard/MedicationManagement';
import ComplianceTracker from '../../components/dashboard/ComplianceTracker';

const PharmacyDashboard = () => {
  const dispatch = useDispatch();
  const { user, hasRole } = useAuth();
  
  // Redux state
  const patients = useSelector(selectUsers);
  const patientsLoading = useSelector(selectUsersLoading);
  const analytics = useSelector(selectUserAnalytics);

  useEffect(() => {
    if (hasRole('PHARMACY_PARTNER')) {
      dispatch(fetchAllUsers({ role: 'CUSTOMER' })); // Get patients
      dispatch(fetchUserAnalytics());
    }
  }, [dispatch, hasRole]);

  if (!hasRole('PHARMACY_PARTNER')) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Access denied. Pharmacy partner dashboard only.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-dwm-text-dark">
      <div className="bg-dwm-green-pale px-6 md:px-16 py-12 md:py-16 border-b border-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-4">
                Partner workspace
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                Pharmacy Partner Dashboard
              </h1>
              <p className="text-dwm-text-mid mt-2 leading-relaxed">
                Patient medication and health management
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-sm text-dwm-text-mid">
                Partner Status: 
                <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                  VERIFIED PARTNER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Patient Overview */}
          <div className="mb-8">
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  🏥 Patient Overview
                </h2>
                <PatientList 
                  patients={patients}
                  loading={patientsLoading}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Medication Management */}
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  💊 Medication Management
                </h2>
                <MedicationManagement />
              </div>
            </div>

            {/* Compliance Tracking */}
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  📈 Compliance Tracking
                </h2>
                <ComplianceTracker 
                  analytics={analytics}
                />
              </div>
            </div>
          </div>

          {/* Pharmacy Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  📋 Prescriptions
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Manage patient prescriptions
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  View Prescriptions
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  📊 Health Data Sync
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Sync patient health metrics
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Sync Data
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  💬 Consultation Coordination
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Coordinate with nutritionists
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Coordinate Care
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  📦 Inventory
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Manage medication stock
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Manage Inventory
                </button>
              </div>
            </div>
          </div>

          {/* Health Integration Status */}
          <div className="mt-8">
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  🔄 Integration Status
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-emerald-50 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-600">Active</div>
                    <div className="text-sm text-emerald-800">DWM Integration</div>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-xl">
                    <div className="text-2xl font-bold text-sky-600">247</div>
                    <div className="text-sm text-sky-800">Patients Synced</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">89%</div>
                    <div className="text-sm text-purple-800">Medication Adherence</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">12</div>
                    <div className="text-sm text-orange-800">Pending Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;
