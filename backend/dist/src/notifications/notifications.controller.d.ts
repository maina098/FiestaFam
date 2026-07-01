import { NotificationsService } from './notifications.service';
import { Prisma } from '@prisma/client';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(data: Prisma.NotificationUncheckedCreateInput): Promise<Notification>;
    findAll(req: any): Promise<Notification[]>;
    markAsRead(id: string): Promise<Notification>;
}
