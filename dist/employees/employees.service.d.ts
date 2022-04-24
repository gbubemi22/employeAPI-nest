import { EmployeeCreateDto } from './EmployeeCreate.dto';
import { Employee } from './schemas/Employee.schema';
import { EmployeeRepository } from './Employee.repository';
export declare class EmployeesService {
    private employeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    getAllEmployee(): Promise<Employee[]>;
    createEmployee(employeeCreateDto: EmployeeCreateDto): Promise<Employee>;
}
