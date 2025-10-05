import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComplete } from './form-complete';

describe('FormComplete', () => {
  let component: FormComplete;
  let fixture: ComponentFixture<FormComplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComplete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
