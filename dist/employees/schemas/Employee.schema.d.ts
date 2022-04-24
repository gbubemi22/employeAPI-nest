/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { EmployeeStatus, EmployeeTier } from '../Employee.enum';
export declare type EmployeeDocument = Employee & Document;
export declare class Employee {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    nearestCity: string;
    tier: EmployeeTier;
    status: EmployeeStatus;
}
export declare const EmployeeSchema: import("mongoose").Schema<import("mongoose").Document<Employee, any, any>, import("mongoose").Model<import("mongoose").Document<Employee, any, any>, any, any, any>, {}, {}>;
