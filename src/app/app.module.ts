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
    ReservationComponent,
    UpliftingordernowComponent,
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
