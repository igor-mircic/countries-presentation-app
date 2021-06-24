import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryNameFilterComponent } from './country-filtes/country-name-filter/country-name-filter.component';
import { CountryRegionFilterComponent } from './country-filtes/country-region-filter/country-region-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CountryNameFilterComponent,
    CountryRegionFilterComponent,
    CountryCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
