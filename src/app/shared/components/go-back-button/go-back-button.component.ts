import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.scss',
})
export class GoBackButtonComponent {
  @Input() route: string = '/';
}
