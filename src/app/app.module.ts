import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ProfileComponent } from './profile/profile.component';
import { ListingComponent } from './listing/listing.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { AdminComponent } from './admin/admin.component';
import { DataTablesComponent } from './admin/data-tables/data-tables.component';
import { MapsComponent } from './admin/maps/maps.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeclientComponent,
    ReservationComponent,
    HistoriqueComponent,
    ProfileComponent,
    ListingComponent,
    ContactComponent,
    AboutComponent,
    ComplaintComponent,
    AdminComponent,
    DataTablesComponent,
    MapsComponent,
    NotificationComponent,
    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
