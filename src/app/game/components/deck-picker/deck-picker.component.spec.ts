import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DeckPickerComponent } from './deck-picker.component';
import { SwapiService } from '../../services/swapi.service';
import { GoBackButtonComponent } from '../../../shared/components/go-back-button/go-back-button.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

describe('DeckPickerComponent', () => {
  let component: DeckPickerComponent;
  let fixture: ComponentFixture<DeckPickerComponent>;
  let swapiService: SwapiService;

  beforeEach(async () => {
    const swapiServiceStub = {
      listVehicles: jasmine.createSpy('listVehicles').and.returnValue(of([])),
      listStarships: jasmine.createSpy('listStarships').and.returnValue(of([])),
      listPeople: jasmine.createSpy('listPeople').and.returnValue(of([])),
    };

    await TestBed.configureTestingModule({
      declarations: [DeckPickerComponent, GoBackButtonComponent],
      imports: [MatIconModule, RouterModule.forRoot([])],
      providers: [{ provide: SwapiService, useValue: swapiServiceStub }],
    }).compileComponents();

    swapiService = TestBed.inject(SwapiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call SwapiService methods with correct parameters', () => {
    expect(swapiService.listVehicles).toHaveBeenCalledWith(
      component.initialDataParams
    );
    expect(swapiService.listStarships).toHaveBeenCalledWith(
      component.initialDataParams
    );
    expect(swapiService.listPeople).toHaveBeenCalledWith(
      component.initialDataParams
    );
  });

  it('should display deck title', () => {
    component.deckConfig = [
      {
        title: 'Test Deck',
        type: 'test' as any,
        coverImagePath: '',
        description: '',
        isHovered: false,
        data$: of({ total_records: 10, results: [] }) as any,
      },
    ];
    fixture.detectChanges();
    const deckTitle = fixture.debugElement.query(
      By.css('.deck-title')
    ).nativeElement;
    expect(deckTitle.textContent).toContain('Test Deck');
  });

  it('should display total number of cards', () => {
    component.deckConfig = [
      {
        title: 'Test Deck',
        type: 'test' as any,
        coverImagePath: '',
        description: '',
        isHovered: true,
        data$: of({ total_records: 10, results: [] }) as any,
      },
    ];
    fixture.detectChanges();
    const deckTotalNumberOfCards = fixture.debugElement.query(
      By.css('.deck-total-number-of-cards')
    ).nativeElement;
    expect(deckTotalNumberOfCards.textContent).toContain(
      'Total number of cards: 10'
    );
  });
});
