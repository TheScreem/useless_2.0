import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService} from "./core/services/data-service.service";
import { HomeModule} from "./features/home/home.module";
import { CoreModule} from "./core/core.module";
import { SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CoreModule,
    SharedModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
