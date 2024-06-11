import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { DeckPickerComponent } from './components/deck-picker/deck-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { ScoreComponent } from './components/score/score.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    DeckPickerComponent,
    BoardComponent,
    CardComponent,
    ScoreComponent,
  ],
  imports: [CommonModule, HttpClientModule, GameRoutingModule, MaterialModule],
})
export class GameModule {}
