import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AddressController } from './address/address.controller';
import { AddressModule } from './address/address.module';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import {StudentModule} from './student/student.module'

@Module({
  imports: [       
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'3.108.19.157',
      port: 3306,
      username:'interns',
      password:'interns@!@#$%^&*(',
      database: 'interns_ecommerce',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),  AddressModule, StudentModule, 
  ],
  
  controllers: [AppController, AddressController, StudentController, ],
  providers: [AppService],
})

export class AppModule {}
