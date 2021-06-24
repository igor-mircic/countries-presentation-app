import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNameFilterComponent } from './country-name-filter.component';

describe('CountryNameFilterComponent', () => {
  let component: CountryNameFilterComponent;
  let fixture: ComponentFixture<CountryNameFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryNameFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryNameFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
