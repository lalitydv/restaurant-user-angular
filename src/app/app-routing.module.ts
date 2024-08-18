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
import { SavoryandsatisfyingComponent } from './savoryandsatisfying/savoryandsatisfying.component';
import { ZoomiconComponent } from './Menus/zoomicon/zoomicon.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyordersComponent } from './myorders/myorders.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChatComponent } from './chat/chat.component';
import { AddressComponent } from './Address/address/address.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileMainComponent } from './Profile-dashboard/profile-main/profile-main.component';

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
    path: 'savoryandsatisfying' ,
    component: SavoryandsatisfyingComponent
  },
  {
    path: 'zoomicon' ,
    component: ZoomiconComponent
  },
  {
    path: 'checkout' ,
    component: CheckoutComponent
  },
  {
    path: 'myorder' ,
    component: MyordersComponent
  },
  {
    path: 'editprofile' ,
    component: EditProfileComponent
  },
  {
    path: 'chat' ,
    component: ChatComponent
  },
  {
    path: 'editprofile' ,
    component: EditProfileComponent
  },
  {
    path: 'address' ,
    component: AddressComponent
  },
  {
    path: 'changepassword' ,
    component: ChangepasswordComponent
  },
  {
    path: 'contact' ,
    component: ContactComponent
  },
 
  {
    path: 'Policy' ,
    component: PolicyComponent
  },
  {
    path: 'profile-main' ,
    component: ProfileMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
