import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';



@NgModule({
  declarations: [
    CheckoutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckoutPageComponent
  ]
})
export class CheckoutModule { }
