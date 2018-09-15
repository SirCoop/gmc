import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSecretComponent } from './dark-secret.component';

describe('DarkSecretComponent', () => {
  let component: DarkSecretComponent;
  let fixture: ComponentFixture<DarkSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
