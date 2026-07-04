import { EmployeesService } from './employees.service';
import { Prisma } from '@prisma/client';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(data: Prisma.EmployeeCreateInput): Promise<{
        id: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        department: string;
        position: string;
        salary: number | null;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        department: string;
        position: string;
        salary: number | null;
    }[]>;
    update(id: string, data: Prisma.EmployeeUpdateInput): Promise<{
        id: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        department: string;
        position: string;
        salary: number | null;
    }>;
}
