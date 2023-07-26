import { v4 as uuidv4 } from 'uuid';
import { Product } from './Product';

class Brand {
  id?: string;

  name: string;

  created_at: Date;

  products: Product[]

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
    this.name = '';
    
    this.created_at = new Date();

    this.products = [];
  
  }
}

export { Brand };
