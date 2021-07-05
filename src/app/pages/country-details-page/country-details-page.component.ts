import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICountry } from 'src/app/country';
import { CountriesApiService } from 'src/app/shared/countries-api.service';

@Component({
  templateUrl: './country-details-page.component.html',
  styleUrls: ['./country-details-page.component.scss'],
})
export class CountryDetailsPageComponent implements OnInit {
  countrySub!: Subscription;
  borderSub!: Subscription;
  errorMessage: string = '';
  country!: ICountry;
  borderCountries!: ICountry[];

  constructor(
    private countriesApiService: CountriesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let contryName!: string;
    this.route.params.subscribe((params) => {
      contryName = params?.name;
      const country: ICountry | undefined = this.borderCountries?.find(
        (c) => c.name == contryName
      );
      if (country !== undefined) this.changeCountry(country);
    });
    this.countrySub = this.countriesApiService
      .getCountryByName(contryName)
      .subscribe({
        next: (country) => {
          this.country = country[0];
          this.getBorderCountries(country[0]);
        },
        error: (err) => (this.errorMessage = err),
      });
  }

  changeCountry(country: ICountry) {
    this.country = country;
    this.getBorderCountries(country);
  }

  getBorderCountries(country: ICountry) {
    const codes = country.borders.join(';');
    this.borderSub = this.countriesApiService
      .getCountriesByCode(codes)
      .subscribe({
        next: (country) => (this.borderCountries = country),
        error: (err) => (this.errorMessage = err),
      });
  }

  ngOnDestroy(): void {
    this.countrySub.unsubscribe();
    this.borderSub.unsubscribe();
  }
}
