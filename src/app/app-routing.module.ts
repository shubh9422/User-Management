import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component'
import { NewuserComponent } from './newuser/newuser.component'

const routes: Routes = [
  {path: 'user-list', component: UserComponent},
  {path: 'new-user', component: NewuserComponent},
  {path: '', redirectTo: 'user-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
