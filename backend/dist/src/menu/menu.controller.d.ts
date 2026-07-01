import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
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
            createdAt: Date;
            updatedAt: Date;
            slug: string;
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
