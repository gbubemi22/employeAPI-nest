import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class EmployeeTierValidatorPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
