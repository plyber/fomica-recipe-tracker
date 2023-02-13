import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/firebase.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  cards: CardModel[] = [];
  id: number = 0;
  cookTime: number = 0;
  description: string = '';
  title: string = '';

  constructor(private cardService: CardService) { }

  getCards(): void {
      this.cardService.getCards().subscribe(
        response => {
          console.log(response);
        }
      ); 
    }

  ngOnInit() {
    this.getCards();
  }

}
