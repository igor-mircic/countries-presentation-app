import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDetailsPageComponent } from './pages/country-details-page/country-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CountryNameFilterComponent } from './components/country-filters/country-name-filter/country-name-filter.component';
import { CountryRegionFilterComponent } from './components/country-filters/country-region-filter/country-region-filter.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { MaterialModule } from './modules/material.module';

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
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'details/:name', component: CountryDetailsPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
