import { Injectable } from '@angular/core';
import { SwapiService } from './swapi.service';
import { DeckType } from '../enums/deck';
import {
  IApiListResponse,
  IApiRetrieveResponse,
  SwapiObject,
} from '../interfaces/swapi';
import { Observable, tap } from 'rxjs';

enum EvalAttributes {
  MASS = 'mass',
  CREW = 'crew',
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _currentCardsIds!: number[];
  public set currentCardsIds(value: number[]) {
    this._currentCardsIds = value;
  }

  private _evaluationAttribute = new Map<DeckType, EvalAttributes>([
    [DeckType.PEOPLE, EvalAttributes.MASS],
    [DeckType.VEHICLES, EvalAttributes.CREW],
    [DeckType.STARSHIPS, EvalAttributes.CREW],
  ]);

  score!: { player: number; enemy: number };
  currentDeckType!: DeckType;

  playerCardId!: number;
  enemyCardId!: number;

  constructor(private swapiService: SwapiService) {}

  initGame(deckType: DeckType): Observable<IApiListResponse> {
    this.currentDeckType = deckType;
    this.score = { player: 0, enemy: 0 };
    return this.getCards().pipe(
      tap((response: IApiListResponse) => {
        this.currentCardsIds = response.results.map((card) => Number(card.uid));
      })
    );
  }

  newRound(): { player: number; enemy: number } {
    this.playerCardId = this.getRandomCardId();
    this.enemyCardId = this.getRandomCardId();
    return { player: this.playerCardId, enemy: this.enemyCardId };
  }

  evaluateRound(
    playerCard: SwapiObject,
    enemyCard: SwapiObject
  ): SwapiObject | null {
    if (this.currentDeckType === undefined) {
      throw new Error('Deck type is not set');
    }
    const playerCardValue = this.getEvaluateAttributeCardValue(playerCard);
    const enemyCardValue = this.getEvaluateAttributeCardValue(enemyCard);

    if (playerCardValue > enemyCardValue) {
      this.score.player++;
    } else if (playerCardValue < enemyCardValue) {
      this.score.enemy++;
    } else {
      return null;
    }

    return playerCardValue > enemyCardValue ? playerCard : enemyCard;
  }

  getRandomCardId(): number {
    return this._currentCardsIds[
      Math.floor(Math.random() * this._currentCardsIds.length)
    ];
  }

  getCards(): Observable<IApiListResponse> {
    if (!this.currentDeckType) throw new Error('Deck type is not set');
    let data$: Observable<IApiListResponse>;
    let params = { limit: 100, page: 1 };
    switch (this.currentDeckType) {
      case DeckType.PEOPLE:
        data$ = this.swapiService.listPeople(params);
        break;
      case DeckType.VEHICLES:
        data$ = this.swapiService.listVehicles(params);
        break;
      case DeckType.STARSHIPS:
        data$ = this.swapiService.listStarships(params);
        break;
    }
    return data$;
  }

  retrieveCard(cardId: number): Observable<IApiRetrieveResponse<SwapiObject>> {
    if (!this.currentDeckType) {
      throw new Error('Deck type is not set');
    }
    switch (this.currentDeckType) {
      case DeckType.PEOPLE:
        return this.swapiService.retrievePeople(cardId);
      case DeckType.VEHICLES:
        return this.swapiService.retrieveVehicle(cardId);
      case DeckType.STARSHIPS:
        return this.swapiService.retrieveStarship(cardId);
    }
  }

  getEvaluateAttributeCardValue(card: SwapiObject): number {
    if (!this.currentDeckType) {
      throw new Error('Deck type is not set');
    }
    const evalAttr = this._evaluationAttribute.get(
      this.currentDeckType
    ) as EvalAttributes;

    let cardNonParsedValue = card[evalAttr.toString()];
    if (typeof cardNonParsedValue !== 'string')
      throw new Error('Invalid card value');

    // some values are represented as strings with commas, example: 275,123
    let cardValue = Number(cardNonParsedValue.replace(',', ''));
    return isNaN(cardValue) ? 0 : cardValue;
  }
}
