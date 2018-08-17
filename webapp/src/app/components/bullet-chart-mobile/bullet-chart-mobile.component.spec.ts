import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletChartMobileComponent } from './bullet-chart-mobile.component';

describe('BulletChartMobileComponent', () => {
  let component: BulletChartMobileComponent;
  let fixture: ComponentFixture<BulletChartMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletChartMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletChartMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
