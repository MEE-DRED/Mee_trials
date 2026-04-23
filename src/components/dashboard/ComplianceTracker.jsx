import React from 'react';

const ComplianceTracker = ({ analytics }) => {
  const complianceData = [
    { medication: 'Lisinopril', adherence: 85, patients: 45 },
    { medication: 'Metformin', adherence: 72, patients: 38 },
    { medication: 'Amlodipine', adherence: 91, patients: 52 },
    { medication: 'Atorvastatin', adherence: 68, patients: 41 }
  ];

  const getAdherenceColor = (adherence) => {
    if (adherence >= 80) return 'green';
    if (adherence >= 60) return 'yellow';
    return 'red';
  };

  const adherenceClasses = {
    green: 'bg-emerald-100 text-emerald-800',
    yellow: 'bg-amber-100 text-amber-800',
    red: 'bg-red-100 text-red-800'
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-medium text-primary">Medication Adherence</h4>
        <span className="text-sm text-dwm-text-mid">
          Overall: 79% adherence
        </span>
      </div>
      
      <div className="space-y-3">
        {complianceData.map((data) => {
          const color = getAdherenceColor(data.adherence);
          
          return (
            <div key={data.medication} className="p-3 bg-dwm-green-pale rounded-2xl border border-primary/10">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium text-primary">
                  {data.medication}
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${adherenceClasses[color]}`}>
                  {data.adherence}% adherence
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className={`h-2 rounded-full transition-all ${color === 'green' ? 'bg-emerald-500' : color === 'yellow' ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${data.adherence}%` }}
                ></div>
              </div>
              
              <div className="text-xs text-dwm-text-mid">
                {data.patients} patients
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-primary/10">
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="p-2 bg-emerald-50 rounded-xl">
            <div className="text-lg font-bold text-emerald-600">79%</div>
            <div className="text-xs text-emerald-800">Average Adherence</div>
          </div>
          <div className="p-2 bg-sky-50 rounded-xl">
            <div className="text-lg font-bold text-sky-600">176</div>
            <div className="text-xs text-sky-800">Total Patients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceTracker;
