'use client';
import { useEffect, useState } from 'react';

export default function CheckoutQueuePage() {
  const [departures, setDepartures] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/hotel-reservations')
      .then(res => res.json())
      .then(data => {
        // Filter for guests currently checked in
        const checkedIn = data.filter((r: any) => r.status === 'CHECKED_IN');
        setDepartures(checkedIn);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch departures', err);
        setLoading(false);
      });
  }, []);

  const handleCheckOut = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3001/hotel-reservations/${id}/checkout`, { method: 'POST' });
      if (res.ok) {
        alert('Guest successfully checked out!');
        setDepartures(prev => prev.filter(d => d.id !== id));
      } else {
        alert('Failed to check out guest.');
      }
    } catch (e) {
      console.error(e);
      alert('Error connecting to server.');
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '28px', color: '#166534', marginBottom: '10px' }}>Departures Queue</h1>
      <p style={{ color: '#4b5563', marginBottom: '30px' }}>Guests scheduled to check out today.</p>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
            <tr>
              <th style={{ padding: '15px', color: '#475569' }}>Guest Name</th>
              <th style={{ padding: '15px', color: '#475569' }}>Room</th>
              <th style={{ padding: '15px', color: '#475569' }}>Folio Balance</th>
              <th style={{ padding: '15px', color: '#475569', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} style={{ padding: '15px' }}>Loading queue...</td></tr>
            ) : departures.length > 0 ? (
              departures.map(departure => {
                // Calculate mock balance from invoices if available
                let balance = 0;
                if (departure.invoices && departure.invoices.length > 0) {
                  balance = departure.invoices.reduce((acc: number, inv: any) => acc + inv.amount, 0);
                }

                return (
                  <tr key={departure.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '15px', fontWeight: 'bold', color: '#0f172a' }}>{departure.guest?.firstName} {departure.guest?.lastName}</td>
                    <td style={{ padding: '15px', color: '#475569' }}>{departure.room?.roomNumber}</td>
                    <td style={{ padding: '15px', fontWeight: 'bold', color: balance > 0 ? '#ef4444' : '#22c55e' }}>
                      Ksh {balance.toLocaleString()}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'right' }}>
                      <button 
                        onClick={() => handleCheckOut(departure.id)}
                        style={{ backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
                      >
                        Settle Folio & Check Out
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr><td colSpan={4} style={{ padding: '15px', textAlign: 'center', color: '#64748b' }}>No pending departures.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
