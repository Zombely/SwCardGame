import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { GoBackButtonComponent } from '../go-back-button/go-back-button.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule, RouterModule.forRoot([])],
      declarations: [AboutComponent, GoBackButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render go-back-button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-go-back-button')).toBeTruthy();
  });

  it('should render about-container', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.about-container')).toBeTruthy();
  });

  it('should render h1 with text', () => {
    const compiled = fixture.nativeElement;
    const h1 = compiled.querySelector('h1');
    expect(h1.textContent).toContain('About:');
  });

  it('should render a tag with href', () => {
    const compiled = fixture.nativeElement;
    const a = compiled.querySelector('#swapi-link');
    expect(a.getAttribute('href')).toBe('https://www.swapi.tech/');
  });
});
