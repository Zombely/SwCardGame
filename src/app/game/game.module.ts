import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { DeckPickerComponent } from './components/deck-picker/deck-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [DeckPickerComponent, BoardComponent],
  imports: [CommonModule, HttpClientModule, GameRoutingModule],
})
export class GameModule {}
