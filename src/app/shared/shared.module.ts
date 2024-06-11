import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarBackgroundComponent } from './components/star-background/star-background.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AboutComponent } from './components/about/about.component';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';

@NgModule({
  declarations: [
    StarBackgroundComponent,
    MenuComponent,
    AboutComponent,
    GoBackButtonComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [StarBackgroundComponent, MenuComponent, GoBackButtonComponent],
})
export class SharedModule {}
