import { TestBed } from '@angular/core/testing';

import { DeckTypeGuard } from './deck-type.guard';

describe('DeckTypeGuard', () => {
  let guard: DeckTypeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeckTypeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
