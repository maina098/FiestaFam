import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class MenuService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMenuDto: CreateMenuDto): import("@prisma/client").Prisma.Prisma__MenuItemClient<{
        description: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        imageUrl: string | null;
        isAvailable: boolean;
        categoryId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        category: {
            id: string;
            name: string;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        description: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        imageUrl: string | null;
        isAvailable: boolean;
        categoryId: string;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__MenuItemClient<{
        description: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        imageUrl: string | null;
        isAvailable: boolean;
        categoryId: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateMenuDto: UpdateMenuDto): import("@prisma/client").Prisma.Prisma__MenuItemClient<{
        description: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        imageUrl: string | null;
        isAvailable: boolean;
        categoryId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__MenuItemClient<{
        description: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        imageUrl: string | null;
        isAvailable: boolean;
        categoryId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
