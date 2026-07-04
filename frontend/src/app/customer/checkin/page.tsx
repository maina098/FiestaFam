'use client';
import { useEffect, useState } from 'react';

export default function CheckinQueuePage() {
  const [arrivals, setArrivals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ideally this would be ?type=arrivals-today, we'll fetch all and filter for now in UI if needed, 
    // or assume the backend sends only pending/confirmed.
    fetch('http://localhost:3001/hotel-reservations')
      .then(res => res.json())
      .then(data => {
        // Filter for guests that need to be checked in
        const pendingArrivals = data.filter((r: any) => r.status === 'CONFIRMED' || r.status === 'PENDING');
        setArrivals(pendingArrivals);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch arrivals', err);
        setLoading(false);
      });
  }, []);

  const handleCheckIn = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3001/hotel-reservations/${id}/checkin`, { method: 'POST' });
      if (res.ok) {
        alert('Guest successfully checked in!');
        setArrivals(prev => prev.filter(a => a.id !== id));
      } else {
        alert('Failed to check in guest.');
      }
    } catch (e) {
      console.error(e);
      alert('Error connecting to server.');
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '28px', color: '#166534', marginBottom: '10px' }}>Arrivals Queue</h1>
      <p style={{ color: '#4b5563', marginBottom: '30px' }}>Guests scheduled to check in today.</p>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
            <tr>
              <th style={{ padding: '15px', color: '#475569' }}>Guest Name</th>
              <th style={{ padding: '15px', color: '#475569' }}>Room Assigned</th>
              <th style={{ padding: '15px', color: '#475569' }}>Status</th>
              <th style={{ padding: '15px', color: '#475569', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} style={{ padding: '15px' }}>Loading queue...</td></tr>
            ) : arrivals.length > 0 ? (
              arrivals.map(arrival => (
                <tr key={arrival.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '15px', fontWeight: 'bold', color: '#0f172a' }}>{arrival.guest?.firstName} {arrival.guest?.lastName}</td>
                  <td style={{ padding: '15px', color: '#475569' }}>{arrival.room?.roomNumber || 'Not assigned'}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ padding: '5px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 'bold', backgroundColor: '#FEF9C3', color: '#854D0E' }}>
                      Awaiting Arrival
                    </span>
                  </td>
                  <td style={{ padding: '15px', textAlign: 'right' }}>
                    <button 
                      onClick={() => handleCheckIn(arrival.id)}
                      style={{ backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                      Check In Now
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={4} style={{ padding: '15px', textAlign: 'center', color: '#64748b' }}>No pending arrivals.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
