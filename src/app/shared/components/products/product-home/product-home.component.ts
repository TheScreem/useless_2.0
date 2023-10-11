import { Component, OnInit } from '@angular/core';
import { ProductsService} from "../../../../core/services/products.service";
import { Product } from "../../../../models/product.model";

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        (data: Product[]) => {
          this.products = data;
          console.log(this.products);
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );

  }
}
