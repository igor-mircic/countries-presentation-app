import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-country-region-filter',
  templateUrl: './country-region-filter.component.html',
  styleUrls: ['./country-region-filter.component.scss'],
})
export class CountryRegionFilterComponent implements OnInit {
  regions: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
