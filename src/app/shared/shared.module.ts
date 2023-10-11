import { NgModule } from '@angular/core';
import { ProductHomeComponent } from './components/products/product-home/product-home.component';
import {CommonModule, NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    ProductHomeComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage

  ],
  exports: [
    ProductHomeComponent
  ]
})
export class SharedModule { }
