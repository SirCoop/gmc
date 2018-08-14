
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavResponsiveComponent } from './sidenav-responsive.component';

describe('SidenavResponsiveComponent', () => {
  let component: SidenavResponsiveComponent;
  let fixture: ComponentFixture<SidenavResponsiveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [SidenavResponsiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
