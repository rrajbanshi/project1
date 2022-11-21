import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptionStarterComponent } from './suscription-starter.component';

describe('SuscriptionStarterComponent', () => {
  let component: SuscriptionStarterComponent;
  let fixture: ComponentFixture<SuscriptionStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriptionStarterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscriptionStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
