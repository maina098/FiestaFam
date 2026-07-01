import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Employee } from '@prisma/client';
export declare class EmployeesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.EmployeeCreateInput): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee | null>;
    update(id: string, data: Prisma.EmployeeUpdateInput): Promise<Employee>;
}
