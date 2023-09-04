import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './home/banner/banner.component';
import { DiscountComponent } from './home/discount/discount.component';
import { ServicesStoreComponent } from './home/services-store/services-store.component';
import { ProductsComponent } from './home/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HorizontalMenuComponent,
    FooterComponent,
    BannerComponent,
    DiscountComponent,
    ServicesStoreComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
