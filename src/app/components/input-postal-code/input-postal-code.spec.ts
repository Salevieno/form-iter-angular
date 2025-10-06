import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPostalCode } from './input-postal-code';

describe('InputPostalCode', () => {
  let component: InputPostalCode;
  let fixture: ComponentFixture<InputPostalCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPostalCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPostalCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
