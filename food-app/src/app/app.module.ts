import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponent } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
// import { UserSettingComponent } from './user-setting/user-setting.component';
// import { LogoutComponent } from './logout/logout.component';
// import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
// import { CartComponent } from './cart/cart.component';

//npm install -g json-server
//json-server --watch db.json

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    // UserSettingComponent,
    // LogoutComponent,
    // HomeComponent,
    // UserComponent,
    // CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
