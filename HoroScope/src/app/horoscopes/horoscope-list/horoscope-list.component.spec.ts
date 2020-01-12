import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeListComponent } from './horoscope-list.component';

describe('HoroscopeListComponent', () => {
  let component: HoroscopeListComponent;
  let fixture: ComponentFixture<HoroscopeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroscopeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroscopeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
