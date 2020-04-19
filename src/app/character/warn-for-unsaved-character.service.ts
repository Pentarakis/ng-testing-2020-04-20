import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterComponent } from './character/character.component';

@Injectable({
  providedIn: 'root'
})
export class WarnForUnsavedCharacterService implements CanDeactivate<CharacterComponent> {

  constructor() {
  }

  canDeactivate(component: CharacterComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.form.dirty) {
      alert('Ungespeicherte Änderungen!');
    }

    return !component.form.dirty;
  }
}
