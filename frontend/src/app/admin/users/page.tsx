'use client';

import { useState, useEffect } from 'react';

export default function UserManagementPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'CUSTOMER'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // Ideally this connects to GET /users. For now, we mock the UI state to show it works structurally.
    try {
      const response = await fetch('http://localhost:3001/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (e) {
      console.error('Failed to fetch users', e);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('User successfully provisioned!');
        fetchUsers();
        setFormData({ name: '', email: '', password: '', role: 'CUSTOMER' });
      } else {
        alert('Failed to provision user.');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '28px', color: '#1e293b', marginBottom: '20px' }}>User Provisioning & Portal Management</h1>
      
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#334155' }}>Provision New User</h2>
        <form onSubmit={handleCreateUser} style={{ display: 'grid', gap: '15px', maxWidth: '500px' }}>
          
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          
          <input 
            type="password" 
            placeholder="Temporary Password" 
            required 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />

          <select 
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: 'white' }}
          >
            <option value="CUSTOMER">Customer (Customer Portal)</option>
            <option value="CLIENT">Client (B2B/Corporate Portal)</option>
            <option value="STAFF">Staff (Operations Portal)</option>
            <option value="ADMIN">Admin (Administration Portal)</option>
          </select>

          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              padding: '12px', 
              backgroundColor: '#2563eb', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {loading ? 'Provisioning...' : 'Create Account & Assign Portal'}
          </button>
        </form>
      </div>

      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#334155' }}>Provisioned Accounts</h2>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '10px' }}>Name</th>
              <th style={{ padding: '10px' }}>Email</th>
              <th style={{ padding: '10px' }}>Portal Access Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px' }}>{user.name}</td>
                  <td style={{ padding: '10px' }}>{user.email}</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', color: '#2563eb' }}>{user.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ padding: '10px', color: '#64748b' }}>No users provisioned yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
