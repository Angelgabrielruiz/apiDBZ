import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from './characters';
import { Planets } from './planets';
import { Transformations } from './transformations';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private charactersUrl = 'https://dragonball-api.com/api/characters';
  private planetsUrl = 'https://dragonball-api.com/api/planets';
  private transformationsUrl = 'https://dragonball-api.com/api/transformations';

  constructor(private http: HttpClient) { }


  getCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(this.charactersUrl);
  }

  
  getCharacterById(id: string): Observable<Characters> {
    return this.http.get<Characters>(`${this.charactersUrl}/${id}`);
  }

  
  getPlanets(): Observable<Planets[]> {
    return this.http.get<Planets[]>(this.planetsUrl);
  }

  
  getPlanetById(id: string): Observable<Planets> {
    return this.http.get<Planets>(`${this.planetsUrl}/${id}`);
  }

  
  getTransformations(): Observable<Transformations[]> {
    return this.http.get<Transformations[]>(this.transformationsUrl);
  }

  
  getTransformationById(id: string): Observable<Transformations> {
    return this.http.get<Transformations>(`${this.transformationsUrl}/${id}`);
  }
}
