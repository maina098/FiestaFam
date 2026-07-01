import { EmployeesService } from './employees.service';
import { Prisma } from '@prisma/client';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(data: Prisma.EmployeeCreateInput): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    update(id: string, data: Prisma.EmployeeUpdateInput): Promise<Employee>;
}
