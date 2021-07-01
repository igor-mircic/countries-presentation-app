import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesApiService } from 'src/app/shared/countries-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  errorMessage: string = '';
  countries: any[] = [];

  constructor(private countriesApiService: CountriesApiService) {}

  ngOnInit(): void {
    this.sub = this.countriesApiService.getAllCountries().subscribe({
      next: (countries) => (this.countries = countries),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  updateRegion(region: string) {
    console.log('Region updated:', region);
  }
}
