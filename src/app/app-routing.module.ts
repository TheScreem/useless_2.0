import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutModule } from "./features/checkout/checkout.module";
import {CheckoutPageComponent} from "./features/checkout/checkout-page/checkout-page.component";
import {HomePageComponent} from "./features/home/home-page/home-page.component";
import {HomeModule} from "./features/home/home.module";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'checkout', component: CheckoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CheckoutModule, HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
