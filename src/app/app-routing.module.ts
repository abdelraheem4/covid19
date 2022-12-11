import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { CenterComponent } from './center/center.component';
import { DoctorModule } from './doctor/doctor.module';
import { HomeComponent } from './home/home.component';
import { UserdashbordModule } from './userdashbord/userdashbord.module';

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
    loadChildren:()=>AdminModule,
    canActivate:[AuthorizationGuard]

  },
  {
     path:'managedoctor',
     loadChildren:()=>DoctorModule,
     canActivate:[AuthorizationGuard]

  },
  {
    path:'userdashbord',
    loadChildren:()=>UserdashbordModule
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
