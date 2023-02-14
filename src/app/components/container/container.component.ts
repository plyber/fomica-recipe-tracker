import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: [ './container.component.scss' ]
})
export class ContainerComponent implements OnInit {
  cards: CardModel[] = [];

  constructor(private cardService: CardService) { }

  getCards(): void {
    this.cardService.onGetCards().subscribe(
      response => {
        if (response !== null){
          this.cards = Object.keys(response).map(id => {
            // @ts-ignore
            return { id: id, ...response[id] }});
        } else {
          this.cards = [];
        }
      }
    );
  }

  ngOnInit() {
    this.getCards();
    console.log(this.cards)
 }
}
