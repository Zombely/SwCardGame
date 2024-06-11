import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { BoardComponent } from './board.component';
import { GameService } from '../../services/game.service';
import { DeckType } from '../../enums/deck';
import { GoBackButtonComponent } from '../../../shared/components/go-back-button/go-back-button.component';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let gameService: GameService;

  beforeEach(async () => {
    const gameServiceStub = {
      initGame: jasmine.createSpy('initGame').and.returnValue(of({})),
      newRound: jasmine
        .createSpy('newRound')
        .and.returnValue({ player: '1', enemy: '2' }),
      retrieveCard: jasmine
        .createSpy('retrieveCard')
        .and.returnValue(of({ result: { properties: {} } as any })),
      evaluateRound: jasmine
        .createSpy('evaluateRound')
        .and.returnValue({ name: 'Player' }),
      getEvaluateAttributeCardValue: jasmine.createSpy(
        'getEvaluateAttributeCardValue'
      ),
    };

    const activatedRouteStub = {
      snapshot: {
        params: {
          deckType: DeckType.PEOPLE,
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [BoardComponent, GoBackButtonComponent, CardComponent],
      imports: [MatIconModule, MatCardModule, RouterModule.forRoot([])],
      providers: [
        { provide: GameService, useValue: gameServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    }).compileComponents();

    gameService = TestBed.inject(GameService);
    gameService.score = { player: 1, enemy: 2 };
    gameService.currentDeckType = DeckType.PEOPLE;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run ngOnInit successfully', () => {
    component.ngOnInit();
    expect(gameService.initGame).toHaveBeenCalledWith(DeckType.PEOPLE);
    expect(gameService.newRound).toHaveBeenCalled();
    expect(gameService.retrieveCard).toHaveBeenCalledTimes(2);
  });

  it('should display the correct score', () => {
    const scoreElement = fixture.debugElement.query(
      By.css('.score')
    ).nativeElement;
    expect(scoreElement.textContent).toContain('1 : 2');
  });

  it('should call initRound when Next Round button is clicked', () => {
    component.winner = 'Player';
    const spy = spyOn(component, 'initRound');
    fixture.detectChanges();
    const button = fixture.debugElement.query(
      By.css('.round-button-wrapper button')
    ).nativeElement;
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should call evalRound when Fight! button is clicked', () => {
    component.winner = null;
    const spy = spyOn(component, 'evalRound');
    fixture.detectChanges();
    const button = fixture.debugElement.query(
      By.css('.round-button-wrapper button')
    ).nativeElement;
    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
