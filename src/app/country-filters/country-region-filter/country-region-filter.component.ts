import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface Region {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-country-region-filter',
  templateUrl: './country-region-filter.component.html',
  styleUrls: ['./country-region-filter.component.scss'],
})
export class CountryRegionFilterComponent implements OnInit {
  regions: Region[] = [
    { value: 'africa', viewValue: 'Africa' },
    { value: 'americas', viewValue: 'Americas' },
    { value: 'asia', viewValue: 'Asia' },
    { value: 'europe', viewValue: 'Europe' },
    { value: 'oceania', viewValue: 'Oceania' },
  ];
  selectedRegion!: Region;

  @Output() regionChangedEvent = new EventEmitter<string>();

  changeRegion(region: Region) {
    this.regionChangedEvent.emit(region.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
