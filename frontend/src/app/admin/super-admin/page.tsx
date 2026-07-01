'use client';

import { Building2, Users, CalendarCheck, Wallet } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './super-admin.module.css';

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/dashboard/stats')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch dashboard stats', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Super Admin Dashboard</h1>
      </div>

      {loading ? (
        <p style={{ color: '#64748b' }}>Loading live system metrics...</p>
      ) : stats ? (
        <>
          <div className={styles.kpiGrid}>
            <div className={styles.kpiCard}>
              <div className={styles.kpiIconWrapper}>
                <Building2 size={24} />
              </div>
              <div>
                <p className={styles.kpiLabel}>Total Rooms</p>
                <p className={styles.kpiValue}>{stats.occupancy?.totalRooms || 0}</p>
                <p className={styles.kpiLabel} style={{ fontSize: '11px', marginTop: '4px' }}>
                  {stats.occupancy?.availableRooms || 0} Available
                </p>
              </div>
            </div>
            
            <div className={styles.kpiCard}>
              <div className={styles.kpiIconWrapper}>
                <Users size={24} />
              </div>
              <div>
                <p className={styles.kpiLabel}>System Provisioned</p>
                <p className={styles.kpiValue}>Live</p>
              </div>
            </div>

            <div className={styles.kpiCard}>
              <div className={styles.kpiIconWrapper}>
                <CalendarCheck size={24} />
              </div>
              <div>
                <p className={styles.kpiLabel}>Total Reservations</p>
                <p className={styles.kpiValue}>{stats.bookings?.totalReservations || 0}</p>
                <p className={styles.kpiLabel} style={{ fontSize: '11px', marginTop: '4px' }}>
                  {stats.bookings?.pendingBookings || 0} Pending
                </p>
              </div>
            </div>

            <div className={styles.kpiCard}>
              <div className={styles.kpiIconWrapper}>
                <Wallet size={24} />
              </div>
              <div>
                <p className={styles.kpiLabel}>Total Paid Revenue</p>
                <p className={styles.kpiValue}>Ksh {stats.revenue?.totalRevenue?.toLocaleString() || 0}</p>
              </div>
            </div>
          </div>

          <div className={styles.chartsGrid}>
            <div className={styles.chartPlaceholder} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p className={styles.chartPlaceholderText} style={{ color: '#1e293b', fontWeight: 'bold' }}>Occupancy Breakdown</p>
              <p style={{ color: '#475569' }}>Occupied: {stats.occupancy?.occupiedRooms || 0}</p>
              <p style={{ color: '#475569' }}>Reserved: {stats.occupancy?.reservedRooms || 0}</p>
              <p style={{ color: '#475569' }}>Maintenance: {stats.occupancy?.maintenanceRooms || 0}</p>
            </div>
            <div className={styles.chartPlaceholder} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p className={styles.chartPlaceholderText} style={{ color: '#1e293b', fontWeight: 'bold' }}>Booking Status</p>
              <p style={{ color: '#475569' }}>Completed: {stats.bookings?.completedBookings || 0}</p>
              <p style={{ color: '#475569' }}>Cancelled: {stats.bookings?.cancelledBookings || 0}</p>
            </div>
          </div>
        </>
      ) : (
        <p style={{ color: '#ef4444' }}>Failed to load metrics from the backend. Ensure NestJS is running.</p>
      )}
    </div>
  );
}
