import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserSettingsService } from '../services/user-settings.service';
import { cardDetails } from '../shared/card-details.model';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css'],
})
export class UserSettingComponent implements OnInit {
  constructor(public _userSetting: UserSettingsService) {}
 
  dataCard !:cardDetails
  cardDetailSubmit!: FormGroup;
  addressSubmit!: FormGroup;
  onCardSubmit() {
    this.dataCard.name = this.cardDetailSubmit.value.name;
    this.dataCard.card = this.cardDetailSubmit.value.card;
    this.dataCard.expiryDate = this.cardDetailSubmit.value.expiryDate;
    this.dataCard.cvv = this.cardDetailSubmit.value.cvv;
    this._userSetting.cardDetails.push(this.dataCard);
  }
  onAddressSubmit() {
    console.log(this.addressSubmit.value);
  }
  abc(){
   console.log(this._userSetting.cardDetails)
  }

  ngOnInit(): void {
    this.cardDetailSubmit = new FormGroup({
      name: new FormControl(null),
      card: new FormControl(null),
      expiryDate: new FormControl(null),
      cvv: new FormControl(),
    });

    this.addressSubmit = new FormGroup({
      name: new FormControl(null),
      address: new FormControl(null),
    });
  }
}
