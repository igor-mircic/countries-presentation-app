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
  sub!: Subscription;
  errorMessage: string = '';
  country!: ICountry;
  borderCountrys!: ICountry[];

  constructor(
    private countriesApiService: CountriesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const contryName = String(this.route.snapshot.paramMap.get('name'));
    this.sub = this.countriesApiService.getCountryByName(contryName).subscribe({
      next: (country) => (this.country = country[0]),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
