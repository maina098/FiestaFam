import { ReactNode } from 'react';
import Link from 'next/link';

export default function StaffLayout({ children }: { children: ReactNode }) {
  const linkStyle = { color: 'white', textDecoration: 'none', display: 'block', padding: '10px 0', borderBottom: '1px solid #166534' };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f0fdf4' }}>
      <aside style={{ width: '250px', backgroundColor: '#14532d', color: 'white', padding: '20px' }}>
        <h2>Staff Portal</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          <li><Link href="/staff" style={linkStyle}>Overview</Link></li>
          <li><Link href="/staff/housekeeping" style={linkStyle}>Housekeeping Tasks</Link></li>
          <li><Link href="/staff/maintenance" style={linkStyle}>Maintenance Issues</Link></li>
          <li><Link href="/staff/restaurant" style={linkStyle}>Restaurant Orders</Link></li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>
        {children}
      </main>
    </div>
  );
}
