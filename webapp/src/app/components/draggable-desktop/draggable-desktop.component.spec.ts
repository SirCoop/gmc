import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableDesktopComponent } from './draggable-desktop.component';

describe('DraggableDesktopComponent', () => {
  let component: DraggableDesktopComponent;
  let fixture: ComponentFixture<DraggableDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
