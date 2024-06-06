import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarBackgroundComponent } from './components/star-background/star-background.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [StarBackgroundComponent, MenuComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [StarBackgroundComponent, MenuComponent],
})
export class SharedModule {}
