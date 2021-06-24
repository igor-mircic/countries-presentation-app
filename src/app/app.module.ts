import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryNameFilterComponent } from './country-filters/country-name-filter/country-name-filter.component';
import { CountryRegionFilterComponent } from './country-filters/country-region-filter/country-region-filter.component';
import { CountryDetailsPageComponent } from './pages/country-details-page/country-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CountryNameFilterComponent,
    CountryRegionFilterComponent,
    CountryCardComponent,
    CountryDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
