import { Injectable } from '@angular/core';
import { Address } from '../shared/address.model';
import { cardDetails } from '../shared/card-details.model';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  constructor() { }

  cardDetails !: cardDetails[]
  address !: Address[]
}
