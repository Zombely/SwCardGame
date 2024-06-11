import { Component, Input, OnInit } from '@angular/core';
import { SwapiObject } from '../../interfaces/swapi';
import { DeckType } from '../../enums/deck';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() cardData!: SwapiObject;

  cardType!: DeckType;
  cardMetaDataExcludedKyes: string[] = [
    'name',
    'mass',
    'url',
    'created',
    'edited',
    'films',
    'pilots',
    'homeworld',
    'crew',
  ];

  cardEvalAttribute!: number;
  cardMetaData!: Array<{ key: string; value: string | string[] }>;

  constructor(private gameService: GameService) {}

  validateInputs() {
    if (!this.gameService.currentDeckType)
      throw new Error('gameService: Missing required data: currentDeckType');
    if (!this.cardData)
      throw new Error('CardComponent: Missing required input: cardData');
  }

  ngOnInit(): void {
    this.validateInputs();
    this.cardType = this.gameService.currentDeckType;
    this.cardEvalAttribute = this.gameService.getEvaluateAttributeCardValue(
      this.cardData
    );
    this.cardMetaData = Object.entries(this.cardData)
      .filter(([key]) => !this.cardMetaDataExcludedKyes.includes(key))
      .map(([key, value]) => ({ key, value }));
  }
}
