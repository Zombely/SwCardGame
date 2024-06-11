import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeckType } from '../../game/enums/deck';

@Injectable({
  providedIn: 'root',
})
export class DeckTypeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const validDeckTypes = Object.values(DeckType).map((deckType) => deckType);
    const deckType = route.params['deckType'];

    if (validDeckTypes.includes(deckType)) {
      return true;
    } else {
      this.router.navigate(['/game']);
      return false;
    }
  }
}
