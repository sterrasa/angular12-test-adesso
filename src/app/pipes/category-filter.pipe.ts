import { Pipe, PipeTransform } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
}

@Pipe({
  name: 'categoryFilter',
})
export class CategoryFilterPipe implements PipeTransform {
  transform(products: Product[], category: string): Product[] {
    if (!category || category === 'all') {
      return products; // Return all products if no category is selected or "all" is selected
    }

    return products.filter((product) => product.category === category);
  }
}
