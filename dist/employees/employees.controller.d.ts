import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './employeeSearch.dto';
import { Employee } from './schemas/Employee.schema';
export declare class EmployeesController {
    private employeeService;
    constructor(employeeService: EmployeesService);
    getAllEmployees(param: EmployeeSearchDto): Promise<Employee[]>;
}
