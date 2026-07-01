import { ReactNode } from 'react';

export default function StaffLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f0fdf4' }}>
      <aside style={{ width: '250px', backgroundColor: '#14532d', color: 'white', padding: '20px' }}>
        <h2>Staff Portal</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #166534' }}>Overview</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #166534' }}>Housekeeping Tasks</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #166534' }}>Maintenance Issues</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #166534' }}>Restaurant Orders</li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>
        {children}
      </main>
    </div>
  );
}
