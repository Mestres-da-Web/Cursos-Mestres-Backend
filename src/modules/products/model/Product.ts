import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("products")
class Product {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  //brand: Brand;

  //specification?: Specification;

  constructor() {
    this.name = '';

  }
}

export { Product };
