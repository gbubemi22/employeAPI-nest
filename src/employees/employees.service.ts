import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeStatus, EmployeeTier } from './Employee.enum';
import { v1 as uuid } from 'uuid';
import { EmployeeSearchDto } from './employeeSearch.dto';
import { EmployeeUpdateDto } from './employeeUpdate.dto';
import { EmployeeCreateDto } from './EmployeeCreate.dto';
import { Employee } from './schemas/Employee.schema';
import { EmployeeRepository } from './Employee.repository';

@Injectable()
export class EmployeesService {
  constructor(private employeeRepository: EmployeeRepository) {}
  async getAllEmployee(): Promise<Employee[]> {
    return await this.employeeRepository.findAll();
  }

  async createEmployee(
    employeeCreateDto: EmployeeCreateDto,
  ): Promise<Employee> {
    return await this.employeeRepository.create(employeeCreateDto);
  }

  // employeeSearch(employeeSearchDto: EmployeeSearchDto) {
  //   const { status, name } = employeeSearchDto;
  //   let employees = this.getAllEmployee();
  //   if (status) {
  //     employees = employees.filter((employee) => employee.status === status);
  //     //   console.log(employees)
  //   }
  //   if (name) {
  //     employees = employees.filter(
  //       (employee) =>
  //         employee.firstName.includes(name) || employee.lastName.includes(name),
  //     );
  //     console.log(employees);
  //   }
  //   return employees;
  // }

  // getEmployeeById(id: string): Employee {
  //   const employees = this.getAllEmployee();
  //   // eslint-disable-next-line prefer-const
  //   let employee = employees.find((employee) => employee.id === id);
  //   if (!employee) {
  //     throw new NotFoundException(`${id} dose not exist`);
  //   }
  //   return employee;
  // }

  // updateEmployee(employeeUpdateDto: EmployeeUpdateDto): Employee {
  //   const { id, city } = employeeUpdateDto;

  //   const employee = this.getEmployeeById(id);
  //   employee.nearestCity = city;
  //   return employee;
  // }

  // deleteEmployee(id: string): boolean {
  //   const employees = this.getAllEmployee();
  //   this.employees = employees.filter((employee) => employee.id != id);
  //   return employees.length != this.employees.length;
  // }
}
