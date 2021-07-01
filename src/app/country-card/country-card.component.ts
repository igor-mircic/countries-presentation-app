import { Component, OnInit, Input } from '@angular/core';
import { ICountry } from '../country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country!: ICountry;

  constructor() {}

  ngOnInit(): void {}
}
