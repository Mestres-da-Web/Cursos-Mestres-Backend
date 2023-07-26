import { v4 as uuidv4 } from 'uuid';
import { Product } from './Product';

class Specification {
  id?: string;

  name: string;

  description?: string;

  created_at!: Date;

  products: Product[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
    this.name = '';
    this.products = []
  }
}

export { Specification };
