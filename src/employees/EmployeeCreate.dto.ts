/* eslint-disable prettier/prettier */
import { IsEmpty, IsNotEmpty } from 'class-validator';
import { EmployeeStatus, EmployeeTier } from './Employee.enum';

export class EmployeeCreateDto {
  id: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}
