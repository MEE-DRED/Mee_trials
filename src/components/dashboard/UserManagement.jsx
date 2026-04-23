import React from 'react';

const UserManagement = ({ users, loading }) => {
  const roleClasses = {
    blue: 'bg-sky-100 text-sky-800',
    green: 'bg-emerald-100 text-emerald-800',
    purple: 'bg-violet-100 text-violet-800',
    orange: 'bg-orange-100 text-orange-800',
    gray: 'bg-gray-100 text-gray-800'
  };

  const statusClasses = {
    green: 'bg-emerald-100 text-emerald-800',
    gray: 'bg-gray-100 text-gray-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-amber-100 text-amber-800'
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-dwm-green-pale rounded mb-2"></div>
            <div className="h-4 bg-dwm-green-pale rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  const getRoleBadge = (role) => {
    const roles = {
      'CUSTOMER': { color: 'blue', text: 'Customer' },
      'NUTRITIONIST': { color: 'green', text: 'Nutritionist' },
      'ADMIN': { color: 'purple', text: 'Admin' },
      'PHARMACY_PARTNER': { color: 'orange', text: 'Pharmacy' }
    };
    return roles[role] || { color: 'gray', text: 'Unknown' };
  };

  const getStatusBadge = (status) => {
    const statuses = {
      'ACTIVE': { color: 'green', text: 'Active' },
      'INACTIVE': { color: 'gray', text: 'Inactive' },
      'SUSPENDED': { color: 'red', text: 'Suspended' },
      'PENDING_VERIFICATION': { color: 'yellow', text: 'Pending' }
    };
    return statuses[status] || { color: 'gray', text: 'Unknown' };
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-medium text-primary">User Management</h4>
        <div className="flex space-x-2">
          <button className="rounded-xl border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">
            Add User
          </button>
          <button className="rounded-xl border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-primary/10">
              <th className="text-left py-2 px-4 text-sm font-medium text-primary">User</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-primary">Role</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-primary">Status</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-primary">Verified</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-primary">Joined</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-primary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.slice(0, 10).map((user) => {
              const roleBadge = getRoleBadge(user.role);
              const statusBadge = getStatusBadge(user.account_status);
              
              return (
                <tr key={user.id} className="border-b border-primary/10 hover:bg-dwm-green-pale/70 transition duration-300">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {user.first_name?.[0] || 'U'}
                      </div>
                      <div>
                        <div className="font-medium text-primary">
                          {user.first_name} {user.last_name}
                        </div>
                        <div className="text-sm text-dwm-text-mid">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${roleClasses[roleBadge.color] || roleClasses.gray}`}>
                      {roleBadge.text}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[statusBadge.color] || statusClasses.gray}`}>
                      {statusBadge.text}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.is_verified 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {user.is_verified ? 'Verified' : 'Pending'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-dwm-text-mid">
                    {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown'}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="rounded-xl border border-primary/20 px-3 py-2 text-xs font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">
                        Edit
                      </button>
                      <button className="rounded-xl border border-primary/20 px-3 py-2 text-xs font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {users && users.length > 10 && (
        <div className="text-center pt-4">
          <button className="rounded-xl border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition duration-300 hover:border-primary/40 hover:shadow-premium-sm">
            View All Users ({users.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
