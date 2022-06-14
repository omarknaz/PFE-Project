import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homeclient', component: HomeclientComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list', component: ListingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'data-tables', component: DataTablesComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
