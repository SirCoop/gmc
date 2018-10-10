import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplePointComponent } from './triple-point.component';

describe('TriplePointComponent', () => {
  let component: TriplePointComponent;
  let fixture: ComponentFixture<TriplePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriplePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriplePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
