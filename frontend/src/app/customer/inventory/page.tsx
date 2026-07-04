'use client';
import { useEffect, useState } from 'react';

export default function InventoryPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ideally this fetches from GET /inventory/items
    const mockItems = [
      { id: 1, name: 'Towels (Bath)', category: 'linen', quantity: 15, reorderLevel: 20, unit: 'piece' },
      { id: 2, name: 'Mini Soaps', category: 'amenity', quantity: 400, reorderLevel: 100, unit: 'piece' },
      { id: 3, name: 'Coffee Pods', category: 'beverage', quantity: 5, reorderLevel: 50, unit: 'box' },
      { id: 4, name: 'Bed Sheets (King)', category: 'linen', quantity: 30, reorderLevel: 10, unit: 'piece' },
    ];
    setItems(mockItems);
    setLoading(false);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '28px', color: '#5c4b3a' }}>Inventory & Stock Alerts</h1>
          <p style={{ color: '#78716c' }}>Manage hotel stock and automatically trigger reorder alerts.</p>
        </div>
        <button style={{ backgroundColor: '#5c4b3a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
          + Add Item
        </button>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ backgroundColor: '#f5f5f4', borderBottom: '2px solid #e7e5e4' }}>
            <tr>
              <th style={{ padding: '15px', color: '#57534e' }}>Item Name</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Category</th>
              <th style={{ padding: '15px', color: '#57534e' }}>In Stock</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Reorder Level</th>
              <th style={{ padding: '15px', color: '#57534e' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{ padding: '15px' }}>Loading inventory...</td></tr>
            ) : items.length > 0 ? (
              items.map(item => {
                const isLowStock = item.quantity <= item.reorderLevel;
                const isOut = item.quantity === 0;

                return (
                  <tr key={item.id} style={{ borderBottom: '1px solid #e7e5e4' }}>
                    <td style={{ padding: '15px', fontWeight: 'bold', color: '#292524' }}>{item.name}</td>
                    <td style={{ padding: '15px', color: '#78716c', textTransform: 'capitalize' }}>{item.category}</td>
                    <td style={{ padding: '15px', fontWeight: 'bold', color: isOut ? '#ef4444' : isLowStock ? '#f59e0b' : '#22c55e' }}>
                      {item.quantity} {item.unit}s
                    </td>
                    <td style={{ padding: '15px', color: '#78716c' }}>{item.reorderLevel}</td>
                    <td style={{ padding: '15px' }}>
                      <span style={{ 
                        padding: '5px 10px', 
                        borderRadius: '999px', 
                        fontSize: '12px', 
                        fontWeight: 'bold',
                        backgroundColor: isOut ? '#FEE2E2' : isLowStock ? '#FEF3C7' : '#DCFCE7',
                        color: isOut ? '#991B1B' : isLowStock ? '#B45309' : '#166534'
                      }}>
                        {isOut ? 'OUT OF STOCK' : isLowStock ? 'LOW STOCK' : 'OK'}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr><td colSpan={5} style={{ padding: '15px', textAlign: 'center', color: '#a8a29e' }}>No items found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
