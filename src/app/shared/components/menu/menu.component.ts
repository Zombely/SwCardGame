import { Component } from '@angular/core';
import { IMenuConfig } from '../../interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  menuConfig: IMenuConfig[] = [
    {
      title: 'Start Game',
      path: '/game',
    },
    {
      title: 'About',
      path: '/about',
    },
  ];
}
