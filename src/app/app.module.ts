import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PolicyComponent } from './policy/policy.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { AfterenteComponent } from './Auth/afterente/afterente.component';
import { OfferComponent } from './offer/offer.component';
import { MenuComponent } from './Menus/menu/menu.component';
import { NonVegComponent } from './Menus/non-veg/non-veg.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UpliftingordernowComponent } from './upliftingordernow/upliftingordernow.component';
import { SavoryandsatisfyingComponent } from './savoryandsatisfying/savoryandsatisfying.component';
import { ZoomiconComponent } from './Menus/zoomicon/zoomicon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyordersComponent } from './myorders/myorders.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChatComponent } from './chat/chat.component';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';

import { AddressComponent } from './Address/address/address.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileMainComponent } from './Profile-dashboard/profile-main/profile-main.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    PolicyComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AfterenteComponent,
    OfferComponent,
    MenuComponent,
    NonVegComponent,
    ZoomiconComponent,
    ReservationComponent,
    UpliftingordernowComponent,
    SavoryandsatisfyingComponent,
    CheckoutComponent,
    MyordersComponent,
    EditProfileComponent,
    ChatComponent,
    AddressComponent,
    ChangepasswordComponent,
    ProfileMainComponent,
    
   
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
  
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
 }
