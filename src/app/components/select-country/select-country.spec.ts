import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCountry } from './select-country';

describe('SelectCountry', () => {
  let component: SelectCountry;
  let fixture: ComponentFixture<SelectCountry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCountry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCountry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
