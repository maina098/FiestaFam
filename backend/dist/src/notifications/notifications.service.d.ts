import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Notification } from '@prisma/client';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.NotificationUncheckedCreateInput): Promise<Notification>;
    findAll(userId?: string): Promise<Notification[]>;
    markAsRead(id: string): Promise<Notification>;
}
