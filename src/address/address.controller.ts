import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { request } from 'http';
import { address } from 'src/db/entities/address.entity';
import { AddressService } from './address.service';


@Controller('address')
export class AddressController {

    constructor(private addressService: AddressService){}
@Get()
  async index(): Promise<address[]> {
   return await this.addressService.findAll();
   
   }
   @Get('/:id')
   async findAddressById(@Param('id') id: number,): Promise<address> {
      return  await this.addressService.findAddressById(id);
    }
    
 @Post()
    async create(@Body() addressData: address): Promise<any> {
      return  await this.addressService.create(addressData);
    }  
    
    @Put(':id')
    async update(@Param('id') id, @Body() addressData: address): Promise<any> {
        addressData.Id = Number(id);
        console.log('Update #' + addressData.Id)
        return await this.addressService.update(addressData);
    }  


    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return await this.addressService.delete(id);
    }  

}
