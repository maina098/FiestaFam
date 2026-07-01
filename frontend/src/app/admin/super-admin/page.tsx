import { Building2, Users, CalendarCheck, Wallet } from 'lucide-react';
import styles from './super-admin.module.css';

export default function SuperAdminDashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Super Admin Dashboard</h1>
        <button className={styles.addButton}>
          Add New Hotel
        </button>
      </div>

      {/* KPI Cards */}
      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <div className={styles.kpiIconWrapper}>
            <Building2 size={24} />
          </div>
          <div>
            <p className={styles.kpiLabel}>Total Hotels</p>
            <p className={styles.kpiValue}>14</p>
          </div>
        </div>
        
        <div className={styles.kpiCard}>
          <div className={styles.kpiIconWrapper}>
            <Users size={24} />
          </div>
          <div>
            <p className={styles.kpiLabel}>Total Employees</p>
            <p className={styles.kpiValue}>1,245</p>
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiIconWrapper}>
            <CalendarCheck size={24} />
          </div>
          <div>
            <p className={styles.kpiLabel}>Active Reservations</p>
            <p className={styles.kpiValue}>8,432</p>
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiIconWrapper}>
            <Wallet size={24} />
          </div>
          <div>
            <p className={styles.kpiLabel}>Monthly Revenue</p>
            <p className={styles.kpiValue}>$2.4M</p>
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className={styles.chartsGrid}>
        <div className={styles.chartPlaceholder}>
          <p className={styles.chartPlaceholderText}>Revenue by Month Chart Placeholder</p>
        </div>
        <div className={styles.chartPlaceholder}>
          <p className={styles.chartPlaceholderText}>Occupancy Rate Chart Placeholder</p>
        </div>
      </div>
    </div>
  );
}
