import { Component, Input, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  cards!: any[];
  
  constructor( private cardService: CardService)
  {}

  getCards() {
    this.cardService.getCards().subscribe( (response: any) => {
      console.log('TEST', response)
      if (response !== null){
        this.cards = Object.keys(response).map(id => {
          // @ts-ignore
          return { id: id, ...response[id] }});
      } else {
        this.cards = [];
      }
      console.log('CARDS', this.cards)
    });
  }

  ngOnInit(): void {
    this.getCards();
  }

}
