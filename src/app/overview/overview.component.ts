import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import DataService from '../data.service';
import { CardData } from '../models/card-data';
import { Order } from '../models/order';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  active: boolean = false;
  selectedPlayer: string | undefined;

  @Input() order: Order | undefined;
  @Output() selectedCard: EventEmitter<CardData> = new EventEmitter;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

  public getCardData(): Observable<Array<CardData>> {
    return this.dataService.getCardData();
  }

  public cardSelected(card: CardData): void {
    this.selectedCard.emit(card);
  }
}
