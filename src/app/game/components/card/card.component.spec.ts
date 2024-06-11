import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { GameService } from '../../services/game.service';
import { DeckType } from '../../enums/deck';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let gameService: GameService;

  beforeEach(async () => {
    const gameServiceStub = {
      currentDeckType: DeckType.PEOPLE,
      getEvaluateAttributeCardValue: jasmine
        .createSpy('getEvaluateAttributeCardValue')
        .and.returnValue(1),
    };

    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [MatCardModule, MatIconModule],
      providers: [{ provide: GameService, useValue: gameServiceStub }],
    }).compileComponents();

    gameService = TestBed.inject(GameService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.cardData = {
      name: 'Test',
      mass: '1',
      url: '',
      created: '',
      edited: '',
      films: [],
      pilots: [],
      homeworld: '',
      additionalParam: 'test',
      crew: '1',
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call GameService methods with correct parameters', () => {
    expect(gameService.getEvaluateAttributeCardValue).toHaveBeenCalledWith(
      component.cardData
    );
  });

  it('should run ngOnInit successfully', () => {
    spyOn(component, 'validateInputs');
    component.ngOnInit();
    expect(component.validateInputs).toHaveBeenCalled();

    expect(gameService.getEvaluateAttributeCardValue).toHaveBeenCalledWith(
      component.cardData
    );
    expect(component.cardType).toEqual(DeckType.PEOPLE);
    expect(component.cardEvalAttribute).toEqual(1);
    expect(component.cardMetaData.length).toBeGreaterThan(0);
  });

  it('should throw error when cardData is missing', () => {
    component.cardData = undefined as any;
    gameService.currentDeckType = DeckType.PEOPLE;
    expect(() => component.validateInputs()).toThrowError(
      'CardComponent: Missing required input: cardData'
    );
  });

  it('should throw error when currentDeckType is missing', () => {
    gameService.currentDeckType = undefined as any;
    expect(() => component.validateInputs()).toThrowError(
      'gameService: Missing required data: currentDeckType'
    );
  });

  it('should display card name', () => {
    const cardName = fixture.debugElement.query(
      By.css('mat-card-title')
    ).nativeElement;
    expect(cardName.textContent).toContain('Test');
  });

  it('should display card type', () => {
    const cardType = fixture.debugElement.query(
      By.css('mat-card-subtitle')
    ).nativeElement;
    expect(cardType.textContent).toContain('Type: People');
  });

  it('should display card metadata', () => {
    const cardMetadata = fixture.debugElement.queryAll(
      By.css('.card-metadata-record')
    );
    expect(cardMetadata.length).toBeGreaterThan(0);
  });

  it('should display card attack value', () => {
    const cardAttackValue = fixture.debugElement.query(
      By.css('.card-attack-wrapper')
    ).nativeElement;
    expect(cardAttackValue.textContent).toContain('1');
  });
});
