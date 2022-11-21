import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscription-starter',
  templateUrl: './suscription-starter.component.html',
  styleUrls: ['./suscription-starter.component.css'],
})
export class SuscriptionStarterComponent implements OnInit {
  //for 1. slider
  vegetarian: boolean = false;
  nonVegetarian: boolean = false;

  isVegetarian() {
    this.vegetarian = !this.vegetarian;
    if (this.vegetarian) {
      this.nonVegetarian = false;
    }
  }
  isNonVegetarian() {
    this.nonVegetarian = !this.nonVegetarian;
    if (this.nonVegetarian) {
      this.vegetarian = false;
    }
  }

  //for 2. slide

  yesIdo: boolean = false;
  NoAnyDay: boolean = false;

  yesIdoFun() {
    this.yesIdo = !this.yesIdo;
    if (this.yesIdo) {
      this.NoAnyDay = false;
    }
  }
  NoAnyDayFun() {
    this.NoAnyDay = !this.NoAnyDay;
    if (this.NoAnyDay) {
      this.yesIdo = false;
    }
  }

  //for 3. slide

  sunday: boolean = false;
  monday: boolean = false;
  tuesday: boolean = false;
  wednesday: boolean = false;
  thursday: boolean = false;
  friday: boolean = false;
  saturday: boolean = false;

  setSunday() {
    this.sunday = !this.sunday;
  }

  setMonday() {
    this.monday = !this.monday;
  }

  setTuesday() {
    this.tuesday = !this.tuesday;
  }

  setWednesday() {
    this.wednesday = !this.wednesday;
  }
  setThursday() {
    this.thursday = !this.thursday;
  }
  setFriday() {
    this.friday = !this.friday;
  }
  setSaturday() {
    this.saturday = !this.saturday;
  }


  //for 4. slider
  lunchMeal : boolean = false;
  dinnerMeal : boolean = false;

  setLunchMeal(){
    this.lunchMeal = !this.lunchMeal;
  }
  setDinnerMeal(){
    this.dinnerMeal = !this.dinnerMeal
  }

  //for 5. slide
  northIndian : boolean = false;
  southIndian : boolean = false;
  salad : boolean = false;
  keto : boolean = false;

  setNorthIndia(){
    this.northIndian = !this.northIndian
  }
  setSouthIndian(){
    this.southIndian = !this.southIndian
  }
  setSalad(){
    this.salad = !this.salad;
  }
  setKeto(){
    this.keto = !this.keto;
  }

  //for 6. slider
  breakfast: boolean = false;
  lunch_lite: boolean = false;
  lunch_standard: boolean = false;
  lunch_jumbo: boolean = false;
  lunch_premium: boolean = false;
  dinner_lite: boolean = false;
  dinner_standard: boolean = false;
  dinner_jumbo: boolean = false;
  dinner_premium: boolean = false;

  breakfast_enable_disable() {
    this.breakfast = !this.breakfast;
  }
  lunchlite_enable_disable() {
    this.lunch_lite = !this.lunch_lite;
  }
  lunchstandard_enable_disable() {
    this.lunch_standard = !this.lunch_standard;
  }
  lunchpremium_enable_disable() {
    this.lunch_premium = !this.lunch_premium;
  }
  lunchjumbo_enable_disable() {
    this.lunch_jumbo = !this.lunch_jumbo;
  }
  dinnerlite_enable_disable() {
    this.dinner_lite = !this.dinner_lite;
  }
  dinnerstandard_enable_disable() {
    this.dinner_standard = !this.dinner_standard;
  }
  dinnerpremium_enable_disable() {
    this.dinner_premium = !this.dinner_premium;
  }
  dinnerjumbo_enable_disable() {
    this.dinner_jumbo = !this.dinner_jumbo;
  }
  constructor() {}

  ngOnInit(): void {}
}
