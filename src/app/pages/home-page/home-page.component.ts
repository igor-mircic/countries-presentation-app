import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICountry } from 'src/app/country';
import { CountriesApiService } from 'src/app/shared/countries-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  errorMessage: string = '';
  countries: ICountry[] = [];
  filteredCountries: ICountry[] = [];

  constructor(private countriesApiService: CountriesApiService) {}

  ngOnInit(): void {
    this.sub = this.countriesApiService.getAllCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
        this.filteredCountries = countries;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  updateRegion(region: string) {
    if (region !== '') {
      this.filteredCountries = this.countries.filter(
        (country) => country.region === region
      );
      console.log(region);
    } else {
      this.filteredCountries = this.countries;
    }
  }
}
