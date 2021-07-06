import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface IRegion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-country-region-filter',
  templateUrl: './country-region-filter.component.html',
  styleUrls: ['./country-region-filter.component.scss'],
})
export class CountryRegionFilterComponent implements OnInit {
  allRegions: IRegion = { value: '', viewValue: 'All' };
  regions: IRegion[] = [
    { value: 'Africa', viewValue: 'Africa' },
    { value: 'Americas', viewValue: 'Americas' },
    { value: 'Asia', viewValue: 'Asia' },
    { value: 'Europe', viewValue: 'Europe' },
    { value: 'Oceania', viewValue: 'Oceania' },
  ];
  selectedRegion!: IRegion;

  @Output() regionChangedEvent = new EventEmitter<string>();

  regionChanged(region: IRegion) {
    this.regionChangedEvent.emit(region.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
