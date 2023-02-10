import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../models/card.model'
import { CardService } from '../../services/firebase.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent {

  @Input() card!: CardModel;


}

