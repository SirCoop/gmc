import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAnimationComponent } from './face-animation.component';

describe('FaceAnimationComponent', () => {
  let component: FaceAnimationComponent;
  let fixture: ComponentFixture<FaceAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
