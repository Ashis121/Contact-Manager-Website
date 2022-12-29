import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PgntfoundComponent } from './pgntfound/pgntfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './contact/list/list.component';
import { AddComponent } from './contact/add/add.component';
import { EditComponent } from './contact/edit/edit.component';
import { DeleteComponent } from './contact/delete/delete.component';
import { NavbarComponent } from './navbar/navbar.component'
import { JwtModule } from '@auth0/angular-jwt';
import { CsearchComponent } from './csearch/csearch.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactsComponent,
    PgntfoundComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    NavbarComponent,
    CsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
