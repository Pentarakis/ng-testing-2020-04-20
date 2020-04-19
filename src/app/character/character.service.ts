import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/operators';
import { Character } from './model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl = 'http://localhost:3000/characters';

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<Character[]> {
    return this.httpClient
      .get<Character[]>(`${this.baseUrl}?_start=20&_end=120`)
      .pipe(
        catchError(() => {
          this.handleError('Fehler beim Laden der Characters!');
          return of([]);
        })
      );
  }

  read(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(() => {
          this.handleError(`Fehler beim Laden des Characters mit ${id}!`);
          return EMPTY;
        })
      );
  }

  create(character: Character): Observable<Character> {
    return this.httpClient.post<Character>(this.baseUrl, character)
      .pipe(
        catchError(() => {
          this.handleError(`Fehler beim Anlegen des neuen Characters mit!`);
          return EMPTY;
        })
      );
  }

  update(character: Character): Observable<Character> {
    return this.httpClient
      .put<Character>(`${this.baseUrl}/${character.id}`, character)
      .pipe(
        catchError(() => {
          this.handleError(`Fehler beim Speichern des Characters mit ${character.id}!`);
          return EMPTY;
        })
      );
  }

  private handleError(msg: string): void {
    alert(msg);
  }
}
