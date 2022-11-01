import { Injectable } from '@angular/core';
import { ItemDetails } from '../shared/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartData : ItemDetails  //for single items

  public totalItemsInCart : ItemDetails[] = []  //to store all the items placed on cart

  constructor() {
    this.cartData = {
      "hotelName":"",
       "itemName":"",
       "typeOfItem":"",
       "rating":0,
        "price":0,
        "imageUrl":""
    }
}
}
