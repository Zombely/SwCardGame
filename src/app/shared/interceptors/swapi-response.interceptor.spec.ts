import { TestBed } from '@angular/core/testing';

import { SwapiResponseInterceptor } from './swapi-response.interceptor';

describe('SwapiResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SwapiResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SwapiResponseInterceptor = TestBed.inject(SwapiResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
