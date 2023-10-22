import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'user-details', component: UserDetailsComponent},
  { path: 'user-list', component: UserListComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
