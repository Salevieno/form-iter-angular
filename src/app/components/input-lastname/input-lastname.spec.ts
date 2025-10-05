import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLastname } from './input-lastname';

describe('InputLastname', () => {
  let component: InputLastname;
  let fixture: ComponentFixture<InputLastname>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLastname]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLastname);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
