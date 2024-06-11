import { Component } from '@angular/core';
import { IDeckConfig } from '../../interfaces/deck';
import { DeckType } from '../../enums/deck';
import { SwapiService } from '../../services/swapi.service';
import { IApiListParams } from '../../interfaces/swapi';

@Component({
  selector: 'app-deck-picker',
  templateUrl: './deck-picker.component.html',
  styleUrl: './deck-picker.component.scss',
})
export class DeckPickerComponent {
  constructor(private swapiService: SwapiService) {}
  initialDataParams: IApiListParams = { limit: 5 };

  deckConfig: IDeckConfig[] = [
    {
      type: DeckType.VEHICLES,
      coverImagePath: 'assets/images/vehicles-deck-cover.png',
      title: 'Vehicles',
      isHovered: false,
      data$: this.swapiService.listVehicles(this.initialDataParams),
      description:
        'Deck containing all the vehicles from the Star Wars universe.',
    },
    {
      type: DeckType.STARSHIPS,
      coverImagePath: 'assets/images/starships-deck-cover.png',
      title: 'Starships',
      isHovered: false,
      data$: this.swapiService.listStarships(this.initialDataParams),
      description:
        'Deck containing all the starships from the Star Wars universe.',
    },
    {
      type: DeckType.PEOPLE,
      coverImagePath: 'assets/images/peoples-deck-cover.png',
      title: 'Hereos&Villains',
      isHovered: false,
      data$: this.swapiService.listPeople(this.initialDataParams),
      description:
        'Deck containing all the heroes and villans from the Star Wars universe.',
    },
  ];
}
