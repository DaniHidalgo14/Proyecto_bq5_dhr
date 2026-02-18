import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JugadorList } from '../Models/jugadores.models'; 
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class Apijugadores {
  constructor(private http: HttpClient) {}

  getJugadores(url : string): Observable<JugadorList[]> {
    return this.http.get<JugadorList[]>(url);
  }
}
