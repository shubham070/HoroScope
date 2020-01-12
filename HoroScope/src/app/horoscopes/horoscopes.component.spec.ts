import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopesComponent } from './horoscopes.component';

describe('HoroscopesComponent', () => {
  let component: HoroscopesComponent;
  let fixture: ComponentFixture<HoroscopesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroscopesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroscopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
