import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public onLoginSignupPage : boolean;    //checks whether we are currently on sign signup page or not
  public currentlyLogggedInEmail !: string;  //for checking a which user is currently logged in based on the 
  //email we fetch all the data of the user
  public currentyLoggedInUserDisplayName: string = ""

  
  loggedUserDetail !: User[];    //contains a array of users present in the database
  singleUserLoggedIn : User      //contains a single user(whole details) which is currently logged in

  constructor( private _http : HttpClient) { 
    this.onLoginSignupPage = true;
    this.currentlyLogggedInEmail = ""
    //
    this.singleUserLoggedIn = {
      "firstName": "Not Set",
      "lastName": "Not Set",
      "phoneNumber": 0,
      "email": "Not Set",
      "password": "Not Set",
      "id": 0,
      "profession":"not set"
    }
  }


//fetch the data of single user
  getData(){   
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      this.loggedUserDetail = res;
     let resultant_data =  this.loggedUserDetail.find(({email})=>email === this.currentlyLogggedInEmail);
    this.singleUserLoggedIn.id = <number>resultant_data?.id;
    this.singleUserLoggedIn.email = <string>resultant_data?.email;
    this.singleUserLoggedIn.firstName = <string>resultant_data?.firstName;
    this.singleUserLoggedIn.lastName = <string>resultant_data?.lastName;
    this.singleUserLoggedIn.password = <string>resultant_data?.password
    this.singleUserLoggedIn.phoneNumber = <number>resultant_data?.phoneNumber;
    },
    err=>{
      console.log("Server side failure")
    }
    )
  }
}
