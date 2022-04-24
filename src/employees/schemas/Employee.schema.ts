/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EmployeeStatus, EmployeeTier } from '../Employee.enum';

// export const EmployeeSchema = ({
//   id: String,
//   firstName: String,
//   lastName: String,
//   designation: String,
//   nearestCity: String,
//   tier: EmployeeTire,
//   status: EmployeeStatus,
// });

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee{
       @Prop()    
      id: string;
      @Prop({required:true})
      firstName: string;
      @Prop({required:true})
       lastName: string;
       @Prop({required:true})
       designation: string;
       @Prop({required:true})
       nearestCity: string;
       @Prop()
       tier: EmployeeTier;
       @Prop()
       status: EmployeeStatus
}

export const EmployeeSchema =  SchemaFactory.createForClass(Employee);
