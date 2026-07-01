'use client';

import { useEffect, useState } from 'react';

export default function AdminReportsPage() {
  const [financialData, setFinancialData] = useState<any>(null);
  const [hotelData, setHotelData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3001/reports/financial').then(res => res.json()),
      fetch('http://localhost:3001/reports/hotel').then(res => res.json())
    ])
    .then(([fin, hotel]) => {
      setFinancialData(fin);
      setHotelData(hotel);
      setLoading(false);
    })
    .catch(err => {
      console.error('Failed to fetch reports', err);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '28px', color: '#1e293b', marginBottom: '20px' }}>System Reports</h1>
      
      {loading ? (
        <p style={{ color: '#64748b' }}>Generating reports...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#334155' }}>Financial Overview</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                <span style={{ color: '#64748b' }}>Total Invoiced</span>
                <span style={{ fontWeight: 'bold', color: '#0f172a' }}>Ksh {financialData?.totalInvoiced?.toLocaleString() || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                <span style={{ color: '#64748b' }}>Total Paid Revenue</span>
                <span style={{ fontWeight: 'bold', color: '#22c55e' }}>Ksh {financialData?.totalPaid?.toLocaleString() || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Outstanding Balance</span>
                <span style={{ fontWeight: 'bold', color: '#ef4444' }}>Ksh {financialData?.outstanding?.toLocaleString() || 0}</span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#334155' }}>Hotel Operations Report</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                <span style={{ color: '#64748b' }}>Overall Occupancy Rate</span>
                <span style={{ fontWeight: 'bold', color: '#3b82f6', fontSize: '18px' }}>{hotelData?.occupancyRate || '0%'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                <span style={{ color: '#64748b' }}>Total Room Capacity</span>
                <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{hotelData?.totalRooms || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Rooms Currently Available</span>
                <span style={{ fontWeight: 'bold', color: '#22c55e' }}>{hotelData?.availableRooms || 0}</span>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
