import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import DataService from '../data.service';
import { CardData } from '../models/card-data';
import { Order } from '../models/order';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Output() orderChange: EventEmitter<Order> = new EventEmitter;
  @Input() card: CardData = { playerName: "", asset: "", realName: "" };
  orders: Order[] = [{ name: 'Sort DESC', class: '', icon: 'sort', order: 'DESC' }, { name: 'Sort ASC', class: 'reverted', icon: 'sort', order: 'ASC' }];
  submitted: string = '';

  constructor(private dataService: DataService, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  ngOnInit(): void {
  }

  orderChanged(order: Order): void {
    this.orderChange.emit(order);
  }
  submit() {
    this.dataService.submitCard(this.card).toPromise().then(value => {
      if(value.playerName!=""){
        this.openSnackBar(value.playerName, 'Sent!');
      }else{
        this.openSnackBar('Nothing', 'Sent!');
      }
      
    });
  }

}
