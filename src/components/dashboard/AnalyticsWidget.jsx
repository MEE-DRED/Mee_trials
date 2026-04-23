import React from 'react';

const AnalyticsWidget = ({ analytics, loading }) => {
  const cardAccentClasses = {
    blue: 'bg-sky-50',
    green: 'bg-emerald-50',
    purple: 'bg-violet-50',
    orange: 'bg-orange-50',
    pink: 'bg-pink-50'
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-primary/10 bg-white shadow-md">
        <div className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-dwm-green-pale rounded mb-4"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-dwm-green-pale rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const mockAnalytics = {
    totalClients: 247,
    activeClients: 189,
    consultationsThisMonth: 156,
    revenueThisMonth: 156000,
    clientSatisfaction: 4.8,
    healthImprovementRate: 73
  };

  const data = analytics || mockAnalytics;

  const analyticsCards = [
    {
      title: 'Total Clients',
      value: data.totalClients || 0,
      icon: '',
      color: 'blue',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Active Clients',
      value: data.activeClients || 0,
      icon: '',
      color: 'green',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Consultations This Month',
      value: data.consultationsThisMonth || 0,
      icon: '',
      color: 'purple',
      change: '+15%',
      changeType: 'positive'
    },
    {
      title: 'Revenue (RWF)',
      value: data.revenueThisMonth ? `${data.revenueThisMonth.toLocaleString()}` : '0',
      icon: '',
      color: 'orange',
      change: '+18%',
      changeType: 'positive'
    },
    {
      title: 'Client Satisfaction',
      value: data.clientSatisfaction ? `${data.clientSatisfaction}/5` : '0/5',
      icon: '',
      color: 'pink',
      change: '+0.3',
      changeType: 'positive'
    },
    {
      title: 'Health Improvement Rate',
      value: data.healthImprovementRate ? `${data.healthImprovementRate}%` : '0%',
      icon: '',
      color: 'green',
      change: '+5%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition duration-300">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-primary mb-6">Analytics Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {analyticsCards.map((card, index) => (
            <div key={index} className={`p-4 rounded-2xl border border-primary/10 ${cardAccentClasses[card.color] || 'bg-dwm-green-pale'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl">{card.icon}</div>
                <div
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    card.changeType === 'positive' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {card.change}
                </div>
              </div>

              <div className="text-2xl font-bold text-primary mb-1">{card.value}</div>
              <div className="text-sm text-dwm-text-mid">{card.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-primary/10">
          <h3 className="text-lg font-semibold text-primary mb-4">Monthly Performance</h3>
          <div className="h-48 bg-dwm-green-pale rounded-2xl border border-primary/10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2"></div>
              <p className="text-dwm-text-mid">Performance chart would be displayed here</p>
              <p className="text-sm text-dwm-text-mid">(Chart integration coming soon)</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary/10">
          <h3 className="text-lg font-semibold text-primary mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="text-emerald-600 text-xl">Trending Up</div>
              <div>
                <div className="font-medium text-primary">Client Engagement</div>
                <div className="text-sm text-dwm-text-mid">23% increase in active client participation</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-sky-600 text-xl">Health Goal</div>
              <div>
                <div className="font-medium text-primary">Health Outcomes</div>
                <div className="text-sm text-dwm-text-mid">73% of clients showing measurable improvement</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-violet-600 text-xl">Revenue</div>
              <div>
                <div className="font-medium text-primary">Revenue Growth</div>
                <div className="text-sm text-dwm-text-mid">18% increase in monthly consultation revenue</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-orange-600 text-xl">Satisfaction</div>
              <div>
                <div className="font-medium text-primary">Client Satisfaction</div>
                <div className="text-sm text-dwm-text-mid">4.8/5 average satisfaction rating this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsWidget;
