import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component'
import { CreateuserComponent } from './createuser/createuser.component'

const routes: Routes = [
  {path: 'list', component: UserComponent},
  {path: 'create', component: CreateuserComponent},
  {path: 'edit/:id', component: CreateuserComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
