import { ReactNode } from 'react';

export default function CustomerLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fdfbf7' }}>
      <aside style={{ width: '250px', backgroundColor: '#5c4b3a', color: 'white', padding: '20px' }}>
        <h2>Customer Portal</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>My Dashboard</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>My Reservations</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Room Service</li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Billing</li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>
        {children}
      </main>
    </div>
  );
}
