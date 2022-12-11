import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { CenterComponent } from './center/center.component';
import { DoctorModule } from './doctor/doctor.module';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { UserdashbordModule } from './userdashbord/userdashbord.module';
=======
import { ErrorComponent } from './shared/error/error.component';
import { ProtectComponent } from './protect/protect.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
>>>>>>> d3d80b59a2053a50347153d08f7e95895ad920f5

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
    loadChildren:()=>AdminModule
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'protect',
    component:ProtectComponent
  },
  {
    path:'symptoms',
    component:SymptomsComponent
  },
  {
     path:'managedoctor',
     loadChildren:()=>DoctorModule,
     canActivate:[AuthorizationGuard]
<<<<<<< HEAD

  },
  {
    path:'userdashbord',
    loadChildren:()=>UserdashbordModule
  }

=======
  },
  {
    path:'**',
    component:ErrorComponent
  },
>>>>>>> d3d80b59a2053a50347153d08f7e95895ad920f5
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
