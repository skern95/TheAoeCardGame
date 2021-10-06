import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CardData } from '../models/card-data';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() card: CardData = { playerName: "", asset: "", realName: "" };

  constructor() {
  }

  ngOnInit(): void {
  }
  /*  public setCard(){
      this.cardData = this.card;
    }
  
    ngOnChanges(changes: SimpleChanges) {
      this.setCard();
    }*/

}
