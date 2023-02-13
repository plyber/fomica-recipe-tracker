import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  cards: CardModel[] = [{
    id: 0,
    cookTime: 0,
    description: '',
    title: '',
  }];

  constructor(private cardService: CardService) { }

  OnGetCards(): void {
    this.cardService.getCards().subscribe(
      res => this.cards = res
      )
    }

  ngOnInit() {
    this.OnGetCards();
    console.log(this.cards)
 }
}
