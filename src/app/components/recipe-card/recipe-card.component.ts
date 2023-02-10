import { Component, Input } from '@angular/core';
import { CardModel } from '../../models/card.model'
import { CardService } from '../../services/firebase.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent {

  @Input() card: CardModel[] = [{
    id: 1,
    cookTime: 55,
    description: 'Insert long winded descripti here',
    title: 'Tasty Carbonara',
  }];

  constructor(private cardService: CardService) {
  }



  // postCards():void{
  //   this.cardService.postCards()
  // }

}

