import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <aside style={{ width: '250px', backgroundColor: '#1e293b', color: 'white', padding: '20px' }}>
        <h2>Client Portal</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #334155' }}>Dashboard</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #334155' }}>Corporate Bookings</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #334155' }}>Invoices</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #334155' }}>Support</li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>
        {children}
      </main>
    </div>
  );
}
