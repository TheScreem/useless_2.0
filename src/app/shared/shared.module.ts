import { NgModule } from '@angular/core';
import { ProductHomeComponent } from './components/products/product-home/product-home.component';
import { CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ProductHomeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductHomeComponent
  ]
})
export class SharedModule { }
