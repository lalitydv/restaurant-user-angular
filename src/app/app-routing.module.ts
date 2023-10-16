import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { PolicyComponent } from './policy/policy.component';
import { AfterenteComponent } from './Auth/afterente/afterente.component';
import { OfferComponent } from './offer/offer.component';
import { MenuComponent } from './Menus/menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UpliftingordernowComponent } from './upliftingordernow/upliftingordernow.component';

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
    path: 'afterente' ,
    component: AfterenteComponent
  },
  {
    path: 'offer' ,
    component: OfferComponent
  },
  {
    path: 'about' ,
    component: AboutComponent
  },
  {
    path: 'menu' ,
    component: MenuComponent
  },
  {
    path: 'reservation' ,
    component: ReservationComponent
  },
  {
    path: 'upliftingordernow' ,
    component: UpliftingordernowComponent
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
