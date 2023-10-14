import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { PolicyComponent } from './policy/policy.component';

const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent
  },
  {
    path: 'login' ,
    component: LoginComponent
  },
  {
    path: 'signup' ,
    component: SignupComponent
  },
  {
    path: 'forgotPassword' ,
    component: ForgotPasswordComponent
  },
  {
    path: 'about' ,
    component: AboutComponent
  },
  {
    path: 'contact' ,
    component: ContactComponent
  },
  {
    path: 'Policy' ,
    component: PolicyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
