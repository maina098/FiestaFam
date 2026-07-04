import { ReactNode } from 'react';
import Link from 'next/link';

export default function CustomerLayout({ children }: { children: ReactNode }) {
  const linkStyle = { color: 'white', textDecoration: 'none', display: 'block', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fdfbf7' }}>
      <aside style={{ width: '250px', backgroundColor: '#5c4b3a', color: 'white', padding: '20px' }}>
        <h2>Customer Portal</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          <li><Link href="/customer" style={linkStyle}>My Dashboard</Link></li>
          <li><Link href="/customer/rooms" style={linkStyle}>Available Rooms</Link></li>
          <li><Link href="/customer/reservations" style={linkStyle}>My Reservations</Link></li>
          <li><Link href="/customer/checkin" style={linkStyle}>Self Check-In</Link></li>
          <li><Link href="/customer/checkout" style={linkStyle}>Self Check-Out</Link></li>
          <li><Link href="/customer/restaurant" style={linkStyle}>Room Service</Link></li>
          <li><Link href="/customer/billing" style={linkStyle}>My Folio / Billing</Link></li>
          <li style={{ fontSize: '12px', color: '#d6d3d1', marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}>OPERATIONS</li>
          <li><Link href="/customer/housekeeping" style={linkStyle}>Housekeeping Board</Link></li>
          <li><Link href="/customer/inventory" style={linkStyle}>Inventory & Alerts</Link></li>
          <li><Link href="/customer/hr" style={linkStyle}>HR & Staff</Link></li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>
        {children}
      </main>
    </div>
  );
}
