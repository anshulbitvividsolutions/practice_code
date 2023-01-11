import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { address } from 'src/db/entities/address.entity';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AddressReqDto } from './address.dto';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(address)
        private AddressRepository: Repository<address>,
        private dataSource: DataSource
    ) { }
    async findAll(): Promise<address[]> {
        return await this.AddressRepository.find();
    }

    async create(address: AddressReqDto): Promise<address> {
        const addressData = await this.AddressRepository.save(address)
        return addressData
    }
    async findAddressById(id) : Promise<address> {
        try{
            const findAddress = await this.AddressRepository.findOne({where: { Id: id }, }) as address;
          
            console.log(findAddress, "8",id)
            return findAddress;
        }
        
        catch(err){
           
            throw err
        }
    }
        async update(address: address): Promise<UpdateResult> {
            return await this.AddressRepository.update(address.Id, address);
        }
        async delete(id): Promise<DeleteResult> {
            return await this.AddressRepository.delete(id);
        }
    }

