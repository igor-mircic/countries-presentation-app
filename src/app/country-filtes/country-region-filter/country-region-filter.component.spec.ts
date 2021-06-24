import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRegionFilterComponent } from './country-region-filter.component';

describe('CountryRegionFilterComponent', () => {
  let component: CountryRegionFilterComponent;
  let fixture: ComponentFixture<CountryRegionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryRegionFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryRegionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
