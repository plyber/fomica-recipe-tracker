import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardModel } from '../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CardService {
  constructor(private http: HttpClient) { }

  
  getCards(): Observable<CardModel[]> {
    return this.http.get<CardModel[]>('https://fomica-recipe-tracker-default-rtdb.europe-west1.firebasedatabase.app/cards.json?print=pretty')
  }
    
  postCards(){}
}

