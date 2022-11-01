import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemDetails } from '../shared/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isEmpty: boolean = false;
  item : ItemDetails = {
    "hotelName": "",
    "itemName": "",
    "typeOfItem": "",
    "rating": 0,
    "price": 0,
    "imageUrl": ""
  }
  items : ItemDetails[] = [];
  totalSum:Number = 0;

  constructor(public _cartService : CartService) {
    if(_cartService.totalItemsInCart.length == 0){
      this.isEmpty = true;
      this.items.push(this.item);
    }else{
      this.items = _cartService.totalItemsInCart;
      this.totalSum = this.items.map(element =>element.price).reduce((a, b) =>a + b, 0);
    }
   }
   

  ngOnInit(): void {
  }

}
