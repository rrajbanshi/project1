import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekMenuComponent } from './week-menu.component';

describe('WeekMenuComponent', () => {
  let component: WeekMenuComponent;
  let fixture: ComponentFixture<WeekMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
