import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class address {
  static Id(Id: any, cart: address): any {
      throw new Error('Method not implemented.');
  }
  public constructor(init?: Partial<address>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({nullable:true})
  CustomerId: number;

  @Column({nullable:true})
  AddressLine1: string;

  @Column({nullable:true})
  AddressLine2: string;

  @Column({nullable:true})
  City: string;

  @Column({nullable:true})
  PostalCode: string;

  @Column({nullable:true})
  Country: string;

  @Column({nullable:true})
  Phone: string;

  @Column({nullable:true})
  Mobile: string;

  



}




