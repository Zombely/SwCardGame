import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { DeckPickerComponent } from './components/deck-picker/deck-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DeckPickerComponent, BoardComponent, CardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    GameRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class GameModule {}
