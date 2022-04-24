import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { EmployeeTier } from './Employee.enum';

@Injectable()
export class EmployeeTierValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!(value.tier in EmployeeTier)) {
      throw new BadRequestException(`${value.tier} is nat a valid tier`);
    }
    return value;
  }
}
