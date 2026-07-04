'use client';
import { useEffect, useState } from 'react';

export default function RoomGridPage() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/rooms')
      .then(res => res.json())
      .then(data => {
        setRooms(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch rooms', err);
        setLoading(false);
      });
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'AVAILABLE': return '#DCFCE7'; // Green
      case 'OCCUPIED': return '#DBEAFE'; // Blue
      case 'CLEANING': return '#FEF9C3'; // Yellow
      case 'MAINTENANCE': return '#FEE2E2'; // Red
      default: return '#F3F4F6';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'AVAILABLE': return '#166534';
      case 'OCCUPIED': return '#1E40AF';
      case 'CLEANING': return '#854D0E';
      case 'MAINTENANCE': return '#991B1B';
      default: return '#6B7280';
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '28px', color: '#166534', marginBottom: '20px' }}>Room Availability Grid</h1>
      <p style={{ color: '#4b5563', marginBottom: '30px' }}>Live view of all hotel rooms and their current operational status.</p>

      {loading ? (
        <p>Loading rooms...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '15px' }}>
          {rooms.length > 0 ? rooms.map(room => (
            <div 
              key={room.id}
              style={{
                aspectRatio: '1',
                backgroundColor: getStatusColor(room.status),
                color: getStatusTextColor(room.status),
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'transform 0.1s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={{ fontSize: '18px' }}>{room.roomNumber}</span>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', marginTop: '5px' }}>{room.status}</span>
            </div>
          )) : (
            <p>No rooms found in database.</p>
          )}
        </div>
      )}
    </div>
  );
}
