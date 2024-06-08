import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialModules = [MatCardModule, MatIconModule, MatSnackBarModule];

@NgModule({
  imports: [materialModules, CommonModule],
  exports: [materialModules],
})
export class MaterialModule {}
