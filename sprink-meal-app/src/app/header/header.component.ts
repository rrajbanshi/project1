import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredential } from '../model/userCredentials.model';
import { UserCrentialService } from '../services/user-crential.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private _userCred: UserCrentialService,
    private _router: Router
  ) {}
  userLogin: boolean = this._userCred.onLoginSignupPage;
  singleUserData: UserCredential = this._userCred.singleUserData;
  price: number = 0;
  ngOnInit(): void {}
  logout() {
    alert('you have been succesfully logged Out:');

    this._userCred.onLoginSignupPage = true;
    console.log(this._userCred.onLoginSignupPage);
    this._router.navigate(['login']);
  }
}
