import { 
  Building2, 
  CalendarCheck, 
  Clock, 
  MessageSquare,
  Users,
  PaintBucket,
  Key,
  Settings
} from 'lucide-react';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome back,<br />
            Jane Smith 🛎️
          </h1>
          <p className={styles.heroSubtitle}>
            "Hospitality is simply an opportunity to show love and care."
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIconWrapper}>
            <Building2 size={24} />
          </div>
          <div>
            <p className={styles.statLabel}>Total Rooms</p>
            <p className={styles.statValue}>124</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconWrapper}>
            <Clock size={24} />
          </div>
          <div>
            <p className={styles.statLabel}>Pending Check-ins</p>
            <p className={styles.statValue}>12 <span className={styles.statSubValue}>Guests</span></p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconWrapper}>
            <CalendarCheck size={24} />
          </div>
          <div>
            <p className={styles.statLabel}>Bookings Today</p>
            <p className={styles.statValue}>34</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconWrapper}>
            <MessageSquare size={24} />
          </div>
          <div>
            <p className={styles.statLabel}>Unread Messages</p>
            <p className={styles.statValue}>5</p>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className={styles.modulesSection}>
        <div className={styles.modulesHeader}>
          <Settings size={20} color="#c6ac83" />
          <h2 className={styles.modulesTitle}>Hotel Modules</h2>
        </div>

        <div className={styles.modulesGrid}>
          <button className={styles.moduleCard}>
            <div className={styles.moduleIconWrapper}>
              <Users size={20} />
            </div>
            <div>
              <h3 className={styles.moduleCardTitle}>Customer Management</h3>
              <p className={styles.moduleCardDesc}>View and edit guest profiles and history</p>
            </div>
          </button>

          <button className={styles.moduleCard}>
            <div className={styles.moduleIconWrapper}>
              <Building2 size={20} />
            </div>
            <div>
              <h3 className={styles.moduleCardTitle}>Room Management</h3>
              <p className={styles.moduleCardDesc}>Manage room status and availability</p>
            </div>
          </button>

          <button className={styles.moduleCard}>
            <div className={styles.moduleIconWrapper}>
              <Key size={20} />
            </div>
            <div>
              <h3 className={styles.moduleCardTitle}>Check-in / Check-out</h3>
              <p className={styles.moduleCardDesc}>Process guest arrivals and departures</p>
            </div>
          </button>
          
          <button className={styles.moduleCard}>
            <div className={styles.moduleIconWrapper}>
              <PaintBucket size={20} />
            </div>
            <div>
              <h3 className={styles.moduleCardTitle}>Housekeeping</h3>
              <p className={styles.moduleCardDesc}>Assign cleaning tasks and track status</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
