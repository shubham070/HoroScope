import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeItemComponent } from './horoscope-item.component';

describe('HoroscopeItemComponent', () => {
  let component: HoroscopeItemComponent;
  let fixture: ComponentFixture<HoroscopeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroscopeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroscopeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
