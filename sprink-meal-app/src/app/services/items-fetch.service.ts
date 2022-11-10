import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mealItem } from '../model/meal-item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsFetchService {
  AllItems!: mealItem[];
  constructor(private _http: HttpClient) {}

  nonVegItemsLunch(): Observable<mealItem[]> {
    return this._http.get<mealItem[]>('http://localhost:3000/nonVegItemsLunch');
  }

  nonVegItemsDinner():Observable<mealItem[]>{
    return this._http.get<mealItem[]>('http://localhost:3000/nonVegItemsDinner');
  }

  vegItemsDinner():Observable<mealItem[]>{
    return this._http.get<mealItem[]>('http://localhost:3000/vegItemsDinner');
  }
  vegItemsLunch():Observable<mealItem[]>{
    return this._http.get<mealItem[]>('http://localhost:3000/vegItemsLunch');
  }
  
}
