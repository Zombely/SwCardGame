import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckPickerComponent } from './components/deck-picker/deck-picker.component';
import { BoardComponent } from './components/board/board.component';
import { DeckTypeGuard } from '../shared/guards/deck-type.guard';

const routes: Routes = [
  {
    path: '',
    component: DeckPickerComponent,
  },
  {
    path: 'play/:deckType',
    component: BoardComponent,
    canActivate: [DeckTypeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
