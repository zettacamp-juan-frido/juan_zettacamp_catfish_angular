import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
