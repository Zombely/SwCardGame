import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DeckType } from '../../game/enums/deck';

@Injectable({
  providedIn: 'root',
})
export class DeckTypeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const validDeckTypes = Object.values(DeckType);
    const deckType = route.params['deckType'];

    if (validDeckTypes.includes(deckType)) {
      return true;
    } else {
      this.router.navigate(['/game']);
      return false;
    }
  }
}
