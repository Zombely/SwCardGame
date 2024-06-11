import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DeckTypeGuard } from './deck-type.guard';
import { DeckType } from '../../game/enums/deck';

describe('DeckTypeGuard', () => {
  let guard: DeckTypeGuard;
  let router: Router;
  let route: ActivatedRouteSnapshot;

  beforeEach(() => {
    router = { navigate: jasmine.createSpy('navigate') } as any;
    TestBed.configureTestingModule({
      providers: [DeckTypeGuard, { provide: Router, useValue: router }],
    });
    guard = TestBed.inject(DeckTypeGuard);
    route = new ActivatedRouteSnapshot();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true for valid deck types', () => {
    Object.values(DeckType).forEach((deckType) => {
      route.params = { deckType };
      expect(guard.canActivate(route)).toBeTrue();
    });
  });

  it('should return false and navigate to /game for invalid deck types', () => {
    route.params = { deckType: 'invalid' };
    expect(guard.canActivate(route)).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/game']);
  });
});
