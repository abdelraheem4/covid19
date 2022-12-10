import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { CenterComponent } from './center/center.component';
import { DoctorModule } from './doctor/doctor.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'centers',
    component:CenterComponent
  },
  {
    path:'security',
    loadChildren:()=>AuthModule
  },
  {
    path:'admin',
<<<<<<< HEAD
    loadChildren:()=>AdminModule
  },
  {
     path:'managedoctor',
     loadChildren:()=>DoctorModule
=======
    loadChildren:()=>AdminModule,
    canActivate:[AuthorizationGuard]

>>>>>>> 709bd31836be6083adcb2ade1dafe3de0beeccac
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
