import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { PublicPage } from './public.page';

const routes: Routes = [
  {
    path: '',
    component: PublicPage
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule {}
