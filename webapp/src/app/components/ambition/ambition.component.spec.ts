import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitionComponent } from './ambition.component';

describe('AmbitionComponent', () => {
  let component: AmbitionComponent;
  let fixture: ComponentFixture<AmbitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
