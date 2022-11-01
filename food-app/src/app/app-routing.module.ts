import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { UserSettingComponent } from './user-setting/user-setting.component';

const routes: Routes = [
  {path:'', redirectTo: 'signin' , pathMatch:'full'},
  {path:'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'home', component : HomeComponent},
  {path : 'cart', component: CartComponent},
  {path : 'profile', component : ProfileComponent},
  {path:'logout', component:LogoutComponent},
  {path : 'settings', component : UserSettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [SignInComponent, SignUpComponent,
   HomeComponent, CartComponent, ProfileComponent,
   LogoutComponent, UserSettingComponent
  ]