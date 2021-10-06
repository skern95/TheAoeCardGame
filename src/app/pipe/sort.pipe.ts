import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';
import { CardData } from '../models/card-data';
import { Order } from '../models/order';

@Pipe({
  name: 'sortPipe'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<CardData>, order: string): Array<CardData> {
    if (!value) {
      return [];
    }
    switch (order) {
      case 'ASC': value = value.sort((a, b) => a.playerName.localeCompare(b.playerName));
        break;
      case 'DESC': value = value.sort((a, b) => b.playerName.localeCompare(a.playerName));
        break;
      default: ;
    }
    return value;
  }

}
