import { Component, Input } from '@angular/core';
import { CardModel } from '../models/card.model'
import { CardService } from '../services/firebase.service';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
})

export class RecipeCardComponent {

  @Input() card: CardModel = {
    id: 1,
    cookTime: 55,
    description: 'test 4444c',
    title: 'test title',
  };

  constructor(private cardService: CardService) {
  }

  getCards():void{
    this.cardService.getCards().subscribe((data)=>
    console.log(data))
  }

}

