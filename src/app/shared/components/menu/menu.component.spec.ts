import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatIconModule],
      declarations: [MenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct menuConfig', () => {
    expect(component.menuConfig).toEqual([
      {
        title: 'Start Game',
        path: '/game',
      },
      {
        title: 'About',
        path: '/about',
      },
    ]);
  });

  it('should render correct number of menu items', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a').length).toBe(
      component.menuConfig.length
    );
  });

  it('each menu item should have correct title and path', () => {
    const compiled = fixture.nativeElement;
    const menuItems = compiled.querySelectorAll('a');
    menuItems.forEach((item: HTMLElement, index: number) => {
      expect(item.textContent).toContain(component.menuConfig[index].title);
      expect(item.getAttribute('href')).toBe(component.menuConfig[index].path);
    });
  });
});
