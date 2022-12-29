import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AddComponent } from './contact/add/add.component';
import { DeleteComponent } from './contact/delete/delete.component';
import { EditComponent } from './contact/edit/edit.component';
import { ListComponent } from './contact/list/list.component';
import { CsearchComponent } from './csearch/csearch.component';
import { LoginComponent } from './login/login.component';
import { PgntfoundComponent } from './pgntfound/pgntfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"contacts",component:ListComponent,canActivate:[AuthGuardService]},
  {path:"contacts/edit/:cname",component:EditComponent,canActivate:[AuthGuardService]},
  {path:"contacts/delete/:cname",component:DeleteComponent},
  {path:"contacts/new",component:AddComponent,canActivate:[AuthGuardService]},
  {path:"contacts/specific/:cname",component:CsearchComponent,canActivate:[AuthGuardService]},
  {path:"**",component:PgntfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
