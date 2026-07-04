'use client';
import { useEffect, useState } from 'react';

export default function StaffHRPage() {
  const [staff, setStaff] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetches from GET /hr/staff
    const mockStaff = [
      { id: 1, name: 'John Doe', department: 'Housekeeping', role: 'Cleaner', status: 'active', clockStatus: 'clocked_in' },
      { id: 2, name: 'Jane Smith', department: 'Front Desk', role: 'Receptionist', status: 'active', clockStatus: 'clocked_out' },
      { id: 3, name: 'Mike Johnson', department: 'Maintenance', role: 'Technician', status: 'active', clockStatus: 'clocked_in' },
      { id: 4, name: 'Sarah Williams', department: 'Restaurant', role: 'Chef', status: 'on_leave', clockStatus: 'clocked_out' },
    ];
    setStaff(mockStaff);
    setLoading(false);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '28px', color: '#5c4b3a' }}>HR & Staff Management</h1>
          <p style={{ color: '#78716c' }}>Manage hotel employees, attendance, and payroll.</p>
        </div>
        <div>
          <button style={{ backgroundColor: 'transparent', border: '1px solid #5c4b3a', color: '#5c4b3a', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginRight: '10px' }}>
            Run Payroll
          </button>
          <button style={{ backgroundColor: '#5c4b3a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
            + Add Staff
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#f5f5f4', borderBottom: '2px solid #e7e5e4' }}>
            <tr>
              <th style={{ padding: '15px', color: '#57534e' }}>Name</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Department</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Role</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Status</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Shift Status</th>
              <th style={{ padding: '15px', color: '#57534e', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={6} style={{ padding: '15px' }}>Loading staff...</td></tr>
            ) : staff.length > 0 ? (
              staff.map(emp => (
                <tr key={emp.id} style={{ borderBottom: '1px solid #e7e5e4' }}>
                  <td style={{ padding: '15px', fontWeight: 'bold', color: '#292524' }}>{emp.name}</td>
                  <td style={{ padding: '15px', color: '#78716c' }}>{emp.department}</td>
                  <td style={{ padding: '15px', color: '#78716c' }}>{emp.role}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ 
                      padding: '5px 10px', 
                      borderRadius: '999px', 
                      fontSize: '12px', 
                      fontWeight: 'bold',
                      backgroundColor: emp.status === 'active' ? '#DCFCE7' : '#FEE2E2',
                      color: emp.status === 'active' ? '#166534' : '#991B1B'
                    }}>
                      {emp.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: emp.clockStatus === 'clocked_in' ? '#22c55e' : '#a8a29e',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: emp.clockStatus === 'clocked_in' ? '#22c55e' : '#a8a29e' }}></span>
                      {emp.clockStatus === 'clocked_in' ? 'Clocked In' : 'Clocked Out'}
                    </span>
                  </td>
                  <td style={{ padding: '15px', textAlign: 'right' }}>
                    <button style={{ backgroundColor: 'transparent', color: '#3b82f6', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                      View Profile
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={6} style={{ padding: '15px', textAlign: 'center', color: '#a8a29e' }}>No staff found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
