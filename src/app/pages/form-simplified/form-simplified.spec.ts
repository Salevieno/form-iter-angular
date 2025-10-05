import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimplified } from './form-simplified';

describe('FormSimplified', () => {
  let component: FormSimplified;
  let fixture: ComponentFixture<FormSimplified>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSimplified]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSimplified);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
