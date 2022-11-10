import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCredential } from '../model/userCredentials.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserCrentialService {
  allCredential!: UserCredential[];
  singleUserData!: UserCredential;

  onLoginSignupPage: boolean = true;
  // nameLoggedIn!: string;
  // emailLoggedIn!: string;

  constructor(private _http: HttpClient) {}

  getAllCredential(): Observable<UserCredential[]> {
    return this._http.get<UserCredential[]>('http://localhost:3000/accounts');
  }
}
