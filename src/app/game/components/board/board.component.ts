import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckType } from '../../enums/deck';
import { GameService } from '../../services/game.service';
import {
  IApiListResponse,
  IApiRetrieveResponse,
  SwapiObject,
} from '../../interfaces/swapi';
import { Observable, map, tap } from 'rxjs';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  gameDeckType: DeckType = this.route.snapshot.params['deckType'];
  cardsData$!: Observable<IApiListResponse>;
  playerCard!: IApiRetrieveResponse<SwapiObject>;
  enemyCard!: IApiRetrieveResponse<SwapiObject>;
  winner!: string | null;

  roundCards$!: Observable<{
    playerCard: IApiRetrieveResponse<SwapiObject>;
    enemyCard: IApiRetrieveResponse<SwapiObject>;
  }>;

  constructor(public gameService: GameService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cardsData$ = this.gameService.initGame(this.gameDeckType).pipe(
      tap(() => {
        this.initRound();
      })
    );
  }

  initRound(): void {
    this.winner = null;
    let cards = this.gameService.newRound();

    this.roundCards$ = forkJoin([
      this.gameService.retrieveCard(cards.player),
      this.gameService.retrieveCard(cards.enemy),
    ]).pipe(
      map(([playerCard, enemyCard]) => ({ playerCard, enemyCard })),
      tap((mappedResponse) => {
        this.playerCard = mappedResponse.playerCard;
        this.enemyCard = mappedResponse.enemyCard;
      })
    );
  }

  evalRound() {
    if (this.winner) {
      this.initRound();
      return;
    }
    let roundResult = this.gameService.evaluateRound(
      this.playerCard.result.properties,
      this.enemyCard.result.properties
    );

    this.winner = roundResult ? roundResult.name : 'Draw';
  }
}
