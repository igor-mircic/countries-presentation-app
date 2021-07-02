import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-name-filter',
  templateUrl: './country-name-filter.component.html',
  styleUrls: ['./country-name-filter.component.scss'],
})
export class CountryNameFilterComponent implements OnInit {
  countryName: string = '';

  constructor() {}

  @Output() nameChangedEvent = new EventEmitter<string>();

  nameChanged() {
    this.nameChangedEvent.emit(this.countryName);
  }

  ngOnInit(): void {}
}
