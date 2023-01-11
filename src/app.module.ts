import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AddressController } from './address/address.controller';
import { AddressModule } from './address/address.module';
import { MulterModule } from '@nestjs/platform-express';


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
    }),  AddressModule, 
  ],
  
  controllers: [AppController, AddressController, ],
  providers: [AppService],
})

export class AppModule {}
