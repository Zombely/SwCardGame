import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { DeckPickerComponent } from './components/deck-picker/deck-picker.component';


@NgModule({
  declarations: [
    DeckPickerComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
