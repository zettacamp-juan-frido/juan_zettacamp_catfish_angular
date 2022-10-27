import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';
import { UserEditComponent } from './home-user/user-edit/user-edit.component';
import { UserInputComponent } from './user-input/user-input.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeUserComponent,
  },
  {
    path: 'user',
    component: UserInputComponent,
  },
  { path: 'edit', component: UserEditComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
