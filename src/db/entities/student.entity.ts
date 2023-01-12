import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { address } from './address.entity';


@Entity()
export class student {
  static Id(Id: any, student: student): any {
      throw new Error('Method not implemented.');
  }
  public constructor(init?: Partial<student>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  DOB:string;

  @Column()
  Email: string;

  @Column()
  RollNo:string;

  @Column()
  Age:number;

  @Column()
  City: string;

  @Column()
  PinCode: string;

  @Column()
  Country: string;


  @Column()
  Mobile: string;

  @ManyToOne(type => address, address => address.Country)
  @JoinColumn({ name: "Country" })
  address: address;



}




