import { NgModule } from '@angular/core';
import { UserModule} from "./user/user.module";
import { ProductsModule } from "./products/products.module";
import { CheckoutModule } from "./checkout/checkout.module";
import { CartModule } from "./cart/cart.module";
import { AdminModule } from "./admin/admin.module";
import { HomeModule } from "./home/home.module";
import { SharedModule } from "../shared/shared.module";
@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    UserModule,
    ProductsModule,
    CheckoutModule,
    CartModule,
    AdminModule,
    HomeModule
  ],
  exports : [
  ]
})
export class FeaturesModule { }
