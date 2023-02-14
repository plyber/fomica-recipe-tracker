import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardModel } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  constructor(private http: HttpClient) { }

  onGetCards(): Observable<CardModel[]> {
    return this.http.get<CardModel[]>('https://fomica-recipe-tracker-default-rtdb.europe-west1.firebasedatabase.app/cards.json?print=pretty')
  }

  onPostCards(postData: { title: string; description: string; cookTime: number;}) {
    // Send Http request
         this.http.post(
          'https://fomica-recipe-tracker-default-rtdb.europe-west1.firebasedatabase.app/cards.json?print=pretty',
          postData)
          .subscribe((response)=>{
            console.log(response)
          })
    }
  }

