import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
  HttpCode,
  NotFoundException,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './employeeSearch.dto';
import { EmployeeTier } from './Employee.enum';
import { EmployeeUpdateDto } from './employeeUpdate.dto';
import { response } from 'express';
import { EmployeeCreateDto } from './EmployeeCreate.dto';
import { EmployeeTierValidatorPipe } from './employee-tier-validator.pipe';
import { Employee } from './schemas/Employee.schema';

@Controller('/employees')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Get()
  @UsePipes(ValidationPipe)
  async getAllEmployees(@Query() param: EmployeeSearchDto): Promise<Employee[]> {
    // if (Object.keys(param).length) {
    //   this.employeeService.employeeSearch(param);
    // } else {
    //   return this.employeeService.getAllEmployee();
    // }
    return await this.employeeService.getAllEmployee();
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // @UsePipes(new EmployeeTierValidatorPipe())
  // createEmployee(@Body() employeeCreateDto: EmployeeCreateDto): Employee {
  //   return this.employeeService.createEmployee(employeeCreateDto);
  // }

  // @Get('/:id')
  // getEmployeeById(@Param('id') id: string): Employee {
  //   return this.employeeService.getEmployeeById(id);
  // }

  // @Put('/:id/city')
  // updateEmpoyee(
  //   @Param('id') id: string,
  //   @Body() employeeUpdateDto: EmployeeUpdateDto,
  // ) {
  //   employeeUpdateDto.id = id;
  //   return this.employeeService.updateEmployee(employeeUpdateDto);
  // }

  // @Delete('/:id')
  // @HttpCode(204)
  // deleteEmployee(@Param('id') id: string) {
  //   if (!this.employeeService.deleteEmployee(id)) {
  //     throw new NotFoundException('Employee dose not exist');
  //   }
  // }
}
