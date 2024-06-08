import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { DeckPickerComponent } from './components/deck-picker/deck-picker.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DeckPickerComponent],
  imports: [CommonModule, HttpClientModule, GameRoutingModule],
})
export class GameModule {}
