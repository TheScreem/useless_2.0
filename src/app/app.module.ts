import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService} from "./core/services/data-service.service";
import { CoreModule} from "./core/core.module";
import { SharedModule} from "./shared/shared.module";
import { FeaturesModule} from "./features/features.module";
import { CommonModule } from "@angular/common";
import {HomeModule} from "./features/home/home.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    CommonModule,
    FeaturesModule,
    HomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
