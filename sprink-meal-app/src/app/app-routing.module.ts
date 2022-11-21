import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SignupComponent } from './signup/signup.component';
import { SuscriptionStarterComponent } from './suscription-starter/suscription-starter.component';
import { TrialMealComponent } from './trial-meal/trial-meal.component';
import { WeekMenuComponent } from './week-menu/week-menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'week_menu', component: WeekMenuComponent },
  { path: 'trial_meal', component: TrialMealComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'my_profile', component: MyProfileComponent },
  { path : 'suscription_starter', component : SuscriptionStarterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
