import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '../../context/AuthContext';
import { 
  fetchAllUsers, 
  selectUsers,
  selectUsersLoading,
  fetchUserAnalytics,
  selectUserAnalytics,
  fetchFeaturedContent,
  selectFeaturedContent
} from '../../redux';
import UserManagement from '../../components/dashboard/UserManagement';
import SystemAnalytics from '../../components/dashboard/SystemAnalytics';
import ContentManagement from '../../components/dashboard/ContentManagement';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { user, hasRole } = useAuth();
  
  // Redux state
  const allUsers = useSelector(selectUsers);
  const usersLoading = useSelector(selectUsersLoading);
  const analytics = useSelector(selectUserAnalytics);
  const featuredContent = useSelector(selectFeaturedContent);

  useEffect(() => {
    if (hasRole('ADMIN')) {
      dispatch(fetchAllUsers());
      dispatch(fetchUserAnalytics());
      dispatch(fetchFeaturedContent());
    }
  }, [dispatch, hasRole]);

  if (!hasRole('ADMIN')) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Access denied. Admin dashboard only.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-dwm-text-dark">
      <div className="bg-dwm-green-pale px-6 md:px-16 py-12 md:py-16 border-b border-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-4">
                Operations console
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
                Admin Dashboard
              </h1>
              <p className="text-dwm-text-mid mt-2 leading-relaxed">
                System administration and management
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-sm text-dwm-text-mid">
                Admin Level: 
                <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  SUPER ADMIN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* System Analytics */}
          <div className="mb-8">
            <SystemAnalytics 
              analytics={analytics}
              users={allUsers}
              loading={usersLoading}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* User Management */}
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  👥 User Management
                </h2>
                <UserManagement 
                  users={allUsers}
                  loading={usersLoading}
                />
              </div>
            </div>

            {/* Content Management */}
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  📚 Content Management
                </h2>
                <ContentManagement 
                  content={featuredContent}
                />
              </div>
            </div>
          </div>

          {/* Admin Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  🔐 Security
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  System security settings
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Security Settings
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  📊 System Reports
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Generate system reports
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Generate Reports
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  ⚙️ System Config
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Configure system settings
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Settings
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  🏥 Nutritionists
                </h3>
                <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">
                  Manage nutritionist accounts
                </p>
                <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm">
                  Manage Nutritionists
                </button>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="mt-8">
            <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">
                  🖥️ System Status
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-emerald-50 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-600">98.5%</div>
                    <div className="text-sm text-emerald-800">System Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-xl">
                    <div className="text-2xl font-bold text-sky-600">1,247</div>
                    <div className="text-sm text-sky-800">Active Users</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">42</div>
                    <div className="text-sm text-purple-800">Pending Reviews</div>
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

export default AdminDashboard;
