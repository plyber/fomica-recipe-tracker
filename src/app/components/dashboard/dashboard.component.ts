import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CardService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private CardService: CardService,
    private http: HttpClient) { }

  postData(cards: { title: string, cookTime: number, description: string }) {
    if (cards!==null) {
      this.CardService.onPostCards(cards)
    }
  }

}
