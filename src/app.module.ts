import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGO_URI } from './employees/app.properties';
import { EmployeesModule } from './employees/employees.module';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    EmployeesModule,
    MongooseModule.forRoot(MONGO_URI
      
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
