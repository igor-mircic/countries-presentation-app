import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICountry } from 'src/app/country';
import { CountriesApiService } from 'src/app/services/countries-api.service';

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
  hasBorderCountries!: boolean;
  gotCountries: boolean = false;

  constructor(
    private countriesApiService: CountriesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let contryCode!: string;
    this.route.params.subscribe((params) => {
      contryCode = params?.name;
      const country: ICountry | undefined = this.borderCountries?.find(
        (c) => c.name == contryCode
      );
      if (country !== undefined) this.changeCountry(country);
    });
    this.countrySub = this.countriesApiService
      .getCountryByCode(contryCode)
      .subscribe({
        next: (country) => {
          this.country = country;
          this.getBorderCountries(country);
        },
        error: (err) => (this.errorMessage = err),
      });
  }

  changeCountry(country: ICountry) {
    this.country = country;
    this.getBorderCountries(country);
  }

  getBorderCountries(country: ICountry) {
    if (country.borders.length !== 0) {
      this.hasBorderCountries = true;
      const codes = country.borders.join(';');
      console.log(country.borders);
      this.borderSub = this.countriesApiService
        .getCountriesByCode(codes)
        .subscribe({
          next: (country) => {
            this.borderCountries = country;
            this.gotCountries = true;
          },
          error: (err) => (this.errorMessage = err),
        });
    } else {
      this.hasBorderCountries = false;
      this.gotCountries = true;
    }
  }

  ngOnDestroy(): void {
    if (this.countrySub) {
      this.countrySub.unsubscribe();
    }
    if (this.borderSub) {
      this.borderSub.unsubscribe();
    }
  }
}
