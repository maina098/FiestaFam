'use client';
import { useEffect, useState } from 'react';

export default function BillingFoliosPage() {
  const [folios, setFolios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetches from GET /billing/folios
    const mockFolios = [
      { id: 101, guestName: 'Alice Johnson', room: '105', subtotal: 12000, tax: 1920, total: 13920, paid: 5000, balance: 8920, status: 'open' },
      { id: 102, guestName: 'Bob Smith', room: '201', subtotal: 35000, tax: 5600, total: 40600, paid: 40600, balance: 0, status: 'settled' },
      { id: 103, guestName: 'Carol White', room: '112', subtotal: 8000, tax: 1280, total: 9280, paid: 0, balance: 9280, status: 'open' },
    ];
    setFolios(mockFolios);
    setLoading(false);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '28px', color: '#5c4b3a' }}>Folios & Billing</h1>
          <p style={{ color: '#78716c' }}>Manage guest invoices, add ad-hoc charges, and process settlements.</p>
        </div>
        <button style={{ backgroundColor: '#5c4b3a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
          + Create Folio
        </button>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#f5f5f4', borderBottom: '2px solid #e7e5e4' }}>
            <tr>
              <th style={{ padding: '15px', color: '#57534e' }}>Folio #</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Guest</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Room</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Total Amount</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Balance Due</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Status</th>
              <th style={{ padding: '15px', color: '#57534e', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} style={{ padding: '15px' }}>Loading folios...</td></tr>
            ) : folios.length > 0 ? (
              folios.map(folio => (
                <tr key={folio.id} style={{ borderBottom: '1px solid #e7e5e4' }}>
                  <td style={{ padding: '15px', color: '#78716c' }}>F-{folio.id}</td>
                  <td style={{ padding: '15px', fontWeight: 'bold', color: '#292524' }}>{folio.guestName}</td>
                  <td style={{ padding: '15px', color: '#78716c' }}>{folio.room}</td>
                  <td style={{ padding: '15px', color: '#292524' }}>Ksh {folio.total.toLocaleString()}</td>
                  <td style={{ padding: '15px', fontWeight: 'bold', color: folio.balance > 0 ? '#ef4444' : '#22c55e' }}>
                    Ksh {folio.balance.toLocaleString()}
                  </td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ 
                      padding: '5px 10px', 
                      borderRadius: '999px', 
                      fontSize: '12px', 
                      fontWeight: 'bold',
                      backgroundColor: folio.status === 'open' ? '#FEF9C3' : '#DCFCE7',
                      color: folio.status === 'open' ? '#854D0E' : '#166534'
                    }}>
                      {folio.status.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: '15px', textAlign: 'right' }}>
                    <button style={{ backgroundColor: 'transparent', border: '1px solid #d6d3d1', color: '#57534e', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
                      Add Charge
                    </button>
                    {folio.status === 'open' && (
                      <button style={{ backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Settle
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={7} style={{ padding: '15px', textAlign: 'center', color: '#a8a29e' }}>No folios found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
