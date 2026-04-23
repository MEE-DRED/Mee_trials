import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useAuth } from '../../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge, Progress } from '../ui';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Settings,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const { 
    users, 
    content, 
    analytics, 
    nutritionists, 
    partners, 
    systemConfig,
    loading,
    error 
  } = useAdmin();
  const { user } = useAuth();
  const [selectedView, setSelectedView] = useState('overview');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-20 w-20 animate-spin rounded-full border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-center">
          <h2 className="text-2xl font-bold mb-2">Error Loading Dashboard</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dwm-off-white via-white to-dwm-green-pale/30 p-6 text-dwm-text-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 rounded-3xl border border-primary/10 bg-white p-6 shadow-premium-sm">
          <h1 className="mb-2 text-3xl font-semibold text-primary">
            Admin Dashboard
          </h1>
          <p className="text-dwm-text-mid">
            System overview and management controls
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-primary/10 bg-white p-2 shadow-premium-sm">
          {['overview', 'users', 'content', 'nutritionists', 'partners', 'settings'].map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition duration-300 ${
                selectedView === view
                  ? 'bg-primary text-white shadow-premium-sm'
                  : 'text-dwm-text-mid hover:bg-primary/5 hover:text-primary'
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedView === 'overview' && (
          <div className="space-y-6">
            {/* System Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.totalUsers?.toLocaleString() || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    {analytics?.activeUsers?.toLocaleString() || 0} active
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Users (Month)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.newUsersThisMonth || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue (Month)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${(analytics?.revenueThisMonth || 0).toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    {analytics?.consultationsThisMonth || 0} consultations
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Content Views</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.contentViews?.toLocaleString() || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    {analytics?.healthAssessmentsCompleted || 0} assessments completed
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {users.slice(0, 3).map((user) => (
                      <div key={user.id} className="flex items-center justify-between rounded-2xl border border-primary/10 bg-dwm-off-white p-3">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-dwm-text-mid">{user.role} • {user.email}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={user.status === 'ACTIVE' ? 'success' : 'warning'}>
                            {user.status}
                          </Badge>
                          <p className="mt-1 text-xs text-dwm-text-mid">
                            Last login: {new Date(user.lastLogin).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Pending Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {content.filter(item => item.status === 'pending').slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center justify-between rounded-2xl border border-accent/20 bg-amber-50 p-3">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-dwm-text-mid">{item.type} by {item.author}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="warning">Pending</Badge>
                          <p className="mt-1 text-xs text-dwm-text-mid">
                            {item.views} views
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {selectedView === 'users' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>User Management</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="rounded-2xl border border-primary/10 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-premium-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-lg">{user.name}</h3>
                        <p className="text-dwm-text-mid">{user.email}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={user.status === 'ACTIVE' ? 'success' : 'warning'}>
                          {user.status}
                        </Badge>
                        <Badge variant="secondary">{user.role}</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Join Date</p>
                        <p className="text-dwm-text-mid">{new Date(user.joinDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="font-medium">Last Login</p>
                        <p className="text-dwm-text-mid">{new Date(user.lastLogin).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="font-medium">Account ID</p>
                        <p className="text-dwm-text-mid">#{user.id}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        {user.status === 'ACTIVE' ? 'Suspend' : 'Activate'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Content Tab */}
        {selectedView === 'content' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Content Management</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Content
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {content.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-primary/10 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-premium-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-dwm-text-mid">{item.type} by {item.author}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={
                          item.status === 'approved' ? 'default' : 
                          item.status === 'pending' ? 'secondary' : 'outline'
                        }>
                          {item.status}
                        </Badge>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Views</p>
                        <p className="text-dwm-text-mid">{item.views.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="font-medium">Created</p>
                        <p className="text-dwm-text-mid">{new Date(item.createdDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="font-medium">Content ID</p>
                        <p className="text-dwm-text-mid">#{item.id}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      {item.status === 'pending' && (
                        <Button variant="outline" size="sm">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Nutritionists Tab */}
        {selectedView === 'nutritionists' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Nutritionist Management</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Nutritionist
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nutritionists.map((nutritionist) => (
                  <div key={nutritionist.id} className="rounded-2xl border border-primary/10 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-premium-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-lg">{nutritionist.name}</h3>
                        <p className="text-dwm-text-mid">{nutritionist.email}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={nutritionist.status === 'verified' ? 'success' : 'warning'}>
                          {nutritionist.status}
                        </Badge>
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1 text-sm">{nutritionist.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium">License</p>
                        <p className="text-dwm-text-mid">{nutritionist.license}</p>
                      </div>
                      <div>
                        <p className="font-medium">Specializations</p>
                        <p className="text-dwm-text-mid">{nutritionist.specializations.join(', ')}</p>
                      </div>
                      <div>
                        <p className="font-medium">Total Consultations</p>
                        <p className="text-dwm-text-mid">{nutritionist.totalConsultations}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      {nutritionist.status === 'pending' && (
                        <Button variant="outline" size="sm">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Verify
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Partners Tab */}
        {selectedView === 'partners' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Partner Management</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Partner
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {partners.map((partner) => (
                  <div key={partner.id} className="rounded-2xl border border-primary/10 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-premium-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-lg">{partner.name}</h3>
                        <p className="text-dwm-text-mid">{partner.email}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={partner.status === 'verified' ? 'success' : 'warning'}>
                          {partner.status}
                        </Badge>
                        <Badge variant="secondary">{partner.type}</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-dwm-text-mid">{partner.location}</p>
                      </div>
                      <div>
                        <p className="font-medium">Integration Status</p>
                        <p className="text-dwm-text-mid">{partner.integrationStatus}</p>
                      </div>
                      <div>
                        <p className="font-medium">Partner Since</p>
                        <p className="text-dwm-text-mid">{new Date(partner.joinDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      {partner.status === 'pending' && (
                        <Button variant="outline" size="sm">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Verify
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Settings Tab */}
        {selectedView === 'settings' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-4 font-medium text-primary">General Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Supported Regions</label>
                        <div className="flex flex-wrap gap-2">
                          {systemConfig?.regions?.map((region) => (
                            <Badge key={region} variant="secondary">{region}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Supported Languages</label>
                        <div className="flex flex-wrap gap-2">
                          {systemConfig?.supportedLanguages?.map((lang) => (
                            <Badge key={lang} variant="secondary">{lang}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 font-medium text-primary">Financial Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Consultation Fee</label>
                        <p className="text-2xl font-bold">${systemConfig?.consultationFee || 0}</p>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Commission Rate</label>
                        <p className="text-2xl font-bold">{((systemConfig?.commissionRate || 0) * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Flags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(systemConfig?.featureFlags || {}).map(([feature, enabled]) => (
                    <div key={feature} className="flex items-center justify-between rounded-2xl border border-primary/10 bg-dwm-off-white p-4">
                      <div>
                        <p className="font-medium">{feature.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</p>
                        <p className="text-sm text-dwm-text-mid">
                          {enabled ? 'Enabled' : 'Disabled'}
                        </p>
                      </div>
                      <Badge variant={enabled ? 'success' : 'warning'}>
                        {enabled ? 'On' : 'Off'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
