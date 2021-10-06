import { HttpClient } from '@angular/common/http';
import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardData } from './models/card-data';

@Injectable({
  providedIn: 'root'
})
export default class DataService implements OnInit, OnDestroy {
  readonly cardUrl = "http://localhost:8080/api/card";
  cardData: Array<CardData> = [];
  subscription: Observable<Array<CardData>>;


  constructor(private http: HttpClient) {
    this.subscription = http.get<Array<CardData>>('assets/card-data.json');
  }

  public getCardData(): Observable<Array<CardData>> {
    return this.subscription;
  }

  submitCard(card: CardData): Observable<CardData> {
    return this.http.post<CardData>(this.cardUrl, card);
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }
}


