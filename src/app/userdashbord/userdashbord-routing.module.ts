import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FooterComponent } from './footer/footer.component';
import { HomeUaerComponent } from './home-uaer/home-uaer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationComponent } from './reservation/reservation.component';
import { YourReservationComponent } from './your-reservation/your-reservation.component';

const routes: Routes = [{
  path:'reservation',
  component:ReservationComponent
},
{
  path:'yourreservation',
  component:YourReservationComponent
},
{
  path:'userhome',
  component:HomeUaerComponent
},
{
  path:'nav',
  component:NavbarComponent
},
{
  path:'footer',
  component:FooterComponent
},
{
  path:'edit',
  component:EditProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashbordRoutingModule { }
