import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-region-filter',
  templateUrl: './country-region-filter.component.html',
  styleUrls: ['./country-region-filter.component.scss'],
})
export class CountryRegionFilterComponent implements OnInit {
  regions: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  constructor() {}

  ngOnInit(): void {}
}
