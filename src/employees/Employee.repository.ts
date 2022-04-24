/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeCreateDto } from './EmployeeCreate.dto';
import { Employee, EmployeeDocument } from './schemas/Employee.schema';
import { Model } from "mongoose";

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model <EmployeeDocument>
  ) {}

  async create(employeeCreateDto: EmployeeCreateDto): Promise<Employee> {
    const newEmployee = new this.employeeModel(employeeCreateDto);
    return await newEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find();
}

}
