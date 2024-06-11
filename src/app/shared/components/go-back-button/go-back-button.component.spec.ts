import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoBackButtonComponent } from './go-back-button.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

describe('GoBackButtonComponent', () => {
  let component: GoBackButtonComponent;
  let fixture: ComponentFixture<GoBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatIconModule],
      declarations: [GoBackButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct default route', () => {
    expect(component.route).toBe('/');
  });

  it('should render "a" element', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#go-back-anchor')).toBeTruthy();
  });

  it('"a" element should have correct routerLink', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#go-back-anchor').getAttribute('href')).toBe(
      component.route
    );
  });
});
