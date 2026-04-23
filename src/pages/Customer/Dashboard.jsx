import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '../../context/AuthContext';
import { 
  fetchHealthProfile, 
  fetchMyAssessments,
  selectHealthProfile, 
  selectMyAssessments,
  selectHealthLoading,
  selectMeals,
  fetchMeals,
  selectMealsLoading
} from '../../redux';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import HealthProfileWidget from '../../components/health/HealthProfileWidget';
import ProgressTracker from '../../components/health/ProgressTracker';
import RecentAssessments from '../../components/health/RecentAssessments';
import RecommendedMeals from '../../components/health/RecommendedMeals';

const CustomerDashboard = () => {
  const dispatch = useDispatch();
  const { user, hasRole } = useAuth();
  
  // Redux state
  const healthProfile = useSelector(selectHealthProfile);
  const assessments = useSelector(selectMyAssessments);
  const healthLoading = useSelector(selectHealthLoading);
  const meals = useSelector(selectMeals);
  const mealsLoading = useSelector(selectMealsLoading);

  useEffect(() => {
    if (hasRole('CUSTOMER')) {
      dispatch(fetchHealthProfile());
      dispatch(fetchMyAssessments());
      dispatch(fetchMeals({ limit: 6 })); // Featured meals for homepage
    }
  }, [dispatch, hasRole]);

  if (!hasRole('CUSTOMER')) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Access denied. Customer dashboard only.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-dwm-text-dark">
      <div className="bg-dwm-green-pale px-6 md:px-16 py-12 md:py-16 border-b border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-primary leading-tight">
                Welcome back, {user?.first_name || 'Customer'}!
              </h1>
              <p className="text-dwm-text-mid mt-2 leading-relaxed">
                Your personalized health and nutrition dashboard
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-sm text-dwm-text-mid">
                Account Status: 
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                  user?.account_status === 'ACTIVE' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {user?.account_status || 'PENDING'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Health Profile Widget */}
            <div className="lg:col-span-1">
              <HealthProfileWidget 
                profile={healthProfile} 
                loading={healthLoading}
              />
            </div>

            {/* Progress Tracker */}
            <div className="lg:col-span-1">
              <ProgressTracker 
                profile={healthProfile}
                assessments={assessments}
              />
            </div>

            {/* Recent Assessments */}
            <div className="lg:col-span-1">
              <RecentAssessments 
                assessments={assessments}
                loading={healthLoading}
              />
            </div>
          </div>

          {/* Recommended Meals Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Recommended for You
            </h2>
            <RecommendedMeals 
              meals={meals}
              loading={mealsLoading}
              healthProfile={healthProfile}
            />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  📋 Health Assessment
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Complete your comprehensive health evaluation
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Start Assessment
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  🥗 Meal Plans
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  View your personalized nutrition plans
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  View Plans
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  📊 Progress Tracking
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Track your health metrics over time
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Track Progress
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  👨‍⚕️ Book Consultation
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Schedule a session with a nutritionist
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
