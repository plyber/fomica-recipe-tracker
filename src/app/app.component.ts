import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from './models/card.model';
import { CardService } from './services/firebase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'fomica';
  card: CardModel[] | undefined;
  
}
