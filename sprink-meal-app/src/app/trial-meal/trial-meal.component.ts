import { Component, OnInit } from '@angular/core';
import { mealItem } from '../model/meal-item.model';
import { ItemsFetchService } from '../services/items-fetch.service';

@Component({
  selector: 'app-trial-meal',
  templateUrl: './trial-meal.component.html',
  styleUrls: ['./trial-meal.component.css'],
})
export class TrialMealComponent implements OnInit {
  vegSeleted: boolean = true;
  dinnerSelected: boolean = true;
  items!: mealItem[];
  constructor(private _itemService: ItemsFetchService) {}

  ngOnInit(): void {
    this._itemService.vegItemsDinner().subscribe((allData) => {
      this.items = allData;
    });
  }

  onVegSelected() {
    this.vegSeleted = !this.vegSeleted;
    if (!this.vegSeleted && this.dinnerSelected) {
      this._itemService.vegItemsDinner().subscribe((allData) => {
        this.items = allData;
      });
    } else if (this.vegSeleted && !this.dinnerSelected) {
      this._itemService.vegItemsLunch().subscribe((allData) => {
        this.items = allData;
      });
    } else if (!this.vegSeleted && !this.dinnerSelected) {
      this._itemService.nonVegItemsLunch().subscribe((allData) => {
        this.items = allData;
      });
    } else {
      this._itemService.vegItemsDinner().subscribe((allData) => {
        this.items = allData;
      });
    }
    console.log(this.items);
  }
}
