import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryNameFilterComponent } from './country-filters/country-name-filter/country-name-filter.component';
import { CountryRegionFilterComponent } from './country-filters/country-region-filter/country-region-filter.component';
import { CountryDetailsPageComponent } from './pages/country-details-page/country-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
