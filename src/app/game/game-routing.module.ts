import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckPickerComponent } from './components/deck-picker/deck-picker.component';

const routes: Routes = [
  {
    path: '',
    component: DeckPickerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
