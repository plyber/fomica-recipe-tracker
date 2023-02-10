import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from './models/card.model';
import { CardService } from './services/firebase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'fomica';
  card: CardModel[] | undefined;

  constructor(private cardService: CardService) { }

  onGetCards(): void {
    this.cardService
      .getCards()
      .subscribe(
        (response: any) => console.log(response)
      )
  }

  ngOnInit(): void {
    this.onGetCards();
  }
}

