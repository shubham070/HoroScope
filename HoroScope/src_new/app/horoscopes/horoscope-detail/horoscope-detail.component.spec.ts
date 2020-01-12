import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeDetailComponent } from './horoscope-detail.component';

describe('HoroscopeDetailComponent', () => {
  let component: HoroscopeDetailComponent;
  let fixture: ComponentFixture<HoroscopeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroscopeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroscopeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
