'use client';
import { useEffect, useState } from 'react';

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/hotel-reservations')
      .then(res => res.json())
      .then(data => {
        setReservations(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch reservations', err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '28px', color: '#166534' }}>Reservations</h1>
          <p style={{ color: '#4b5563' }}>Manage all hotel bookings.</p>
        </div>
        <button style={{ backgroundColor: '#166534', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
          + New Booking
        </button>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
            <tr>
              <th style={{ padding: '15px', color: '#475569' }}>Guest</th>
              <th style={{ padding: '15px', color: '#475569' }}>Room</th>
              <th style={{ padding: '15px', color: '#475569' }}>Check-In</th>
              <th style={{ padding: '15px', color: '#475569' }}>Check-Out</th>
              <th style={{ padding: '15px', color: '#475569' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{ padding: '15px' }}>Loading...</td></tr>
            ) : reservations.length > 0 ? (
              reservations.map(res => (
                <tr key={res.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '15px', fontWeight: 'bold', color: '#0f172a' }}>{res.guest?.firstName} {res.guest?.lastName}</td>
                  <td style={{ padding: '15px', color: '#475569' }}>{res.room?.roomNumber}</td>
                  <td style={{ padding: '15px', color: '#475569' }}>{new Date(res.checkInDate).toLocaleDateString()}</td>
                  <td style={{ padding: '15px', color: '#475569' }}>{new Date(res.checkOutDate).toLocaleDateString()}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ 
                      padding: '5px 10px', 
                      borderRadius: '999px', 
                      fontSize: '12px', 
                      fontWeight: 'bold',
                      backgroundColor: res.status === 'CONFIRMED' ? '#DBEAFE' : res.status === 'CHECKED_IN' ? '#DCFCE7' : '#F3F4F6',
                      color: res.status === 'CONFIRMED' ? '#1E40AF' : res.status === 'CHECKED_IN' ? '#166534' : '#475569'
                    }}>
                      {res.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={5} style={{ padding: '15px', textAlign: 'center', color: '#64748b' }}>No reservations found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
