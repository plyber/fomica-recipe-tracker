import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardModel } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})

export class CardService {
  constructor(private http: HttpClient) { }

  
  getCards(){
    return this.http.get('https://fomica-recipe-tracker-default-rtdb.europe-west1.firebasedatabase.app/cards.json?print=pretty')
    }
    
  postCards(){}
}

