import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialMealComponent } from './trial-meal.component';

describe('TrialMealComponent', () => {
  let component: TrialMealComponent;
  let fixture: ComponentFixture<TrialMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
