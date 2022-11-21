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
  dinnerToogle = true;
  lunchToggle = false;

  constructor(private _itemService: ItemsFetchService) {}

  ngOnInit(): void {
    this._itemService.vegItemsDinner().subscribe((allData) => {
      this.items = allData;
    });
  }

  dinnerClicked() {
    this.dinnerSelected = true;
    console.log(this.dinnerSelected);
    console.log(this.vegSeleted);
    this.dinnerToogle = true;
    this.lunchToggle = false;
    this.fetchData(); //calling a fetch function
  }
  lunchClicked() {
    this.dinnerSelected = false;
    console.log(this.dinnerSelected);
    console.log(this.vegSeleted);
    this.dinnerToogle = false;
    this.lunchToggle = true;
    this.fetchData(); //calling a fetch function
  }

  onVegSelected() {
    this.vegSeleted = !this.vegSeleted;
    console.log(this.dinnerSelected);
    console.log(this.vegSeleted);
    console.log(this.items);
    this.fetchData(); //calling a fetch function
  }

  fetchData() {
    if (this.vegSeleted && this.dinnerSelected) {
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
      this._itemService.nonVegItemsDinner().subscribe((allData) => {
        this.items = allData;
      });
    }
  }
}
