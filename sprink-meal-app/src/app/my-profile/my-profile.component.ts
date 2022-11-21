import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredential } from '../model/userCredentials.model';
import { UserCrentialService } from '../services/user-crential.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  Toogle = true;

  userLoggedDetails: UserCredential;
  constructor(
    private _userProfile: UserCrentialService,
    private _router: Router
  ) {
    this.userLoggedDetails = this._userProfile.singleUserData;
  }

  onToggleClick() {
    this.Toogle = !this.Toogle;
  }
  ngOnInit(): void {}

  logout() {
    alert('you have been succesfully logged Out:');
    this._userProfile.onLoginSignupPage = true;
    console.log(this._userProfile.onLoginSignupPage);
    this._router.navigate(['login']);
  }
}
