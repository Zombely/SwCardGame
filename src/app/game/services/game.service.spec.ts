import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DeckType } from '../enums/deck';
import { GameService } from './game.service';
import { SwapiService } from './swapi.service';
import { HttpClientModule } from '@angular/common/http';

describe('GameService', () => {
  let service: GameService;
  let swapiService: SwapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GameService, SwapiService],
    });
    service = TestBed.inject(GameService);
    swapiService = TestBed.inject(SwapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize game with specified deck type', () => {
    const mockResponse = {
      results: [
        { uid: '1', additionalData: 'test1' },
        { uid: '2', additionalData: 'test2' },
      ],
    };
    service.getCards = jasmine
      .createSpy('getCards spy')
      .and.returnValue(of(mockResponse));
    service.initGame(DeckType.PEOPLE).subscribe((response) => {
      expect(response).toEqual(mockResponse as any);
      expect(service.score).toEqual({ player: 0, enemy: 0 });
      expect(service.currentDeckType).toEqual(DeckType.PEOPLE);
    });
  });

  it('should call getRandomCardId twice and assign its return values when newRound is called', () => {
    service.getRandomCardId = jasmine
      .createSpy('getRandomCardId spy')
      .and.returnValues(1, 2);
    const result = service.newRound();

    expect(service.getRandomCardId).toHaveBeenCalledTimes(2);
    expect(service.playerCardId).toBe(1);
    expect(service.enemyCardId).toBe(2);
    expect(result).toEqual({ player: 1, enemy: 2 });
  });

  it('should evaluate player wins', () => {
    service.currentDeckType = DeckType.PEOPLE;
    service.score = { player: 0, enemy: 0 };

    spyOn(service, 'getEvaluateAttributeCardValue').and.callFake(
      (card: any) => {
        return card.mass;
      }
    );

    const playerCard: any = { mass: '200' };
    const enemyCard: any = { mass: '100' };

    const winnerCard = service.evaluateRound(playerCard, enemyCard);

    expect(winnerCard).toEqual(playerCard);
    expect(service.score.player).toBe(1);
    expect(service.score.enemy).toBe(0);
  });

  it('should evaluate enemy wins', () => {
    service.currentDeckType = DeckType.PEOPLE;
    service.score = { player: 0, enemy: 0 };

    spyOn(service, 'getEvaluateAttributeCardValue').and.callFake(
      (card: any) => {
        return card.mass;
      }
    );

    const playerCard: any = { mass: '100' };
    const enemyCard: any = { mass: '200' };

    const winnerCard = service.evaluateRound(playerCard, enemyCard);

    expect(winnerCard).toEqual(enemyCard);
    expect(service.score.player).toBe(0);
    expect(service.score.enemy).toBe(1);
  });

  it('should evaluate draw', () => {
    service.currentDeckType = DeckType.PEOPLE;
    service.score = { player: 0, enemy: 0 };

    spyOn(service, 'getEvaluateAttributeCardValue').and.callFake(
      (card: any) => {
        return card.mass;
      }
    );

    const playerCard: any = { mass: '100' };
    const enemyCard: any = { mass: '100' };

    const winnerCard = service.evaluateRound(playerCard, enemyCard);

    expect(winnerCard).toBeNull();
  });

  it('should throw error if deck type is not set', () => {
    const playerCard: any = { mass: '200' };
    const enemyCard: any = { mass: '100' };

    expect(() => service.evaluateRound(playerCard, enemyCard)).toThrowError(
      'Deck type is not set'
    );
  });

  it('should return a random card id', () => {
    let mockData = [1, 2, 3, 4, 5];
    service.currentCardsIds = mockData;

    const randomCardId = service.getRandomCardId();

    expect(mockData).toContain(randomCardId);
  });

  it('should get cards for PEOPLE deck type', () => {
    const spy = spyOn(swapiService, 'listPeople').and.returnValue(
      of({ results: [] } as any)
    );

    service.currentDeckType = DeckType.PEOPLE;
    service.getCards().subscribe();

    expect(spy).toHaveBeenCalled();
  });

  it('should get cards for VEHICLES deck type', () => {
    const spy = spyOn(swapiService, 'listVehicles').and.returnValue(
      of({ results: [] } as any)
    );

    service.currentDeckType = DeckType.VEHICLES;
    service.getCards().subscribe();

    expect(spy).toHaveBeenCalled();
  });

  it('should get cards for STARSHIPS deck type', () => {
    const spy = spyOn(swapiService, 'listStarships').and.returnValue(
      of({ results: [] } as any)
    );

    service.currentDeckType = DeckType.STARSHIPS;
    service.getCards().subscribe();

    expect(spy).toHaveBeenCalled();
  });

  it('should throw an error if deck type is not set', () => {
    expect(() => service.getCards().subscribe()).toThrow(
      new Error('Deck type is not set')
    );
  });

  it('should retrieve a PEOPLE card', () => {
    const cardId = 1;
    const mockCard = { name: 'test', mass: '10' };

    const spy = spyOn(swapiService, 'retrievePeople').and.returnValue(
      of(mockCard as any)
    );
    service.currentDeckType = DeckType.PEOPLE;

    service.retrieveCard(cardId).subscribe((card) => {
      expect(card).toEqual(mockCard as any);
      expect(spy).toHaveBeenCalledWith(cardId);
    });
  });

  it('should retrieve a VEHICLE card', () => {
    const cardId = 1;
    const mockCard = { name: 'test', mass: '10' };

    const spy = spyOn(swapiService, 'retrieveVehicle').and.returnValue(
      of(mockCard as any)
    );
    service.currentDeckType = DeckType.VEHICLES;

    service.retrieveCard(cardId).subscribe((card) => {
      expect(card).toEqual(mockCard as any);
      expect(spy).toHaveBeenCalledWith(cardId);
    });
  });

  it('should retrieve a STARSHIP card', () => {
    const cardId = 1;
    const mockCard = { name: 'test', mass: '10' };

    const spy = spyOn(swapiService, 'retrieveStarship').and.returnValue(
      of(mockCard as any)
    );
    service.currentDeckType = DeckType.STARSHIPS;

    service.retrieveCard(cardId).subscribe((card) => {
      expect(card).toEqual(mockCard as any);
      expect(spy).toHaveBeenCalledWith(cardId);
    });
  });

  it('should throw an error if deck type is not set', () => {
    expect(() => service.retrieveCard(1).subscribe()).toThrow(
      new Error('Deck type is not set')
    );
  });

  it('should get evaluate attribute card value', () => {
    const mockCard: any = { mass: '77', crew: '100' };

    service.currentDeckType = DeckType.PEOPLE;
    let cardValue = service.getEvaluateAttributeCardValue(mockCard);
    expect(cardValue).toEqual(77);

    service.currentDeckType = DeckType.VEHICLES;
    cardValue = service.getEvaluateAttributeCardValue(mockCard);
    expect(cardValue).toEqual(100);

    service.currentDeckType = DeckType.STARSHIPS;
    cardValue = service.getEvaluateAttributeCardValue(mockCard);
    expect(cardValue).toEqual(100);
  });

  it('should throw an error if deck type is not set', () => {
    expect(() => service.getEvaluateAttributeCardValue({} as any)).toThrow(
      new Error('Deck type is not set')
    );
  });

  it('should throw error if value error is not string', () => {
    service.currentDeckType = DeckType.PEOPLE;

    const mockCard: any = { mass: 11 };

    expect(() => service.getEvaluateAttributeCardValue(mockCard)).toThrow(
      new Error('Invalid card value')
    );
  });
});
