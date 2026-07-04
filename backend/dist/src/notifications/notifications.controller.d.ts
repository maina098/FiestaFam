import { NotificationsService } from './notifications.service';
import { Prisma } from '@prisma/client';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(data: Prisma.NotificationUncheckedCreateInput): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        type: import("@prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        isRead: boolean;
    }>;
    findAll(req: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        type: import("@prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        isRead: boolean;
    }[]>;
    markAsRead(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        type: import("@prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        isRead: boolean;
    }>;
}
