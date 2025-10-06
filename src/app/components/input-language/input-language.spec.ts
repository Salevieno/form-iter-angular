import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLanguage } from './input-language';

describe('InputLanguage', () => {
  let component: InputLanguage;
  let fixture: ComponentFixture<InputLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
