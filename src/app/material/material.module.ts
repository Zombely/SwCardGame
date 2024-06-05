import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

const materialModules = [MatCardModule];

@NgModule({
  imports: [materialModules, CommonModule],
  exports: [materialModules],
})
export class MaterialModule {}
