import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyDialogComponent } from './testimony-dialog.component';

describe('TestimonyDialogComponent', () => {
  let component: TestimonyDialogComponent;
  let fixture: ComponentFixture<TestimonyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
