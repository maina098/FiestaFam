import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getStats() {
    // In a real application, these would be queried from the database
    return {
      totalRooms: 124,
      pendingCheckIns: 12,
      bookingsToday: 34,
      unreadMessages: 5,
    };
  }
}
