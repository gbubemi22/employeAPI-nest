import { EmployeeCreateDto } from './EmployeeCreate.dto';
import { Employee, EmployeeDocument } from './schemas/Employee.schema';
import { Model } from "mongoose";
export declare class EmployeeRepository {
    private employeeModel;
    constructor(employeeModel: Model<EmployeeDocument>);
    create(employeeCreateDto: EmployeeCreateDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
}
