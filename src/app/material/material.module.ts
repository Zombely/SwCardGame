import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [MatCardModule, MatIconModule];

@NgModule({
  imports: [materialModules, CommonModule],
  exports: [materialModules],
})
export class MaterialModule {}
