import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineReaderComponent } from './inline-reader.component';

describe('InlineReaderComponent', () => {
  let component: InlineReaderComponent;
  let fixture: ComponentFixture<InlineReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
