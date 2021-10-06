import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardData } from './models/card-data';
import { Order } from './models/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aoe-card-game';

  order: Order | undefined;

  orderChange(order: Order) {
    this.order = order;
  }

  card: CardData = { playerName: "", asset: "", realName: "" };

  selectCard(card: CardData) {
    this.card = card;
  }
}
