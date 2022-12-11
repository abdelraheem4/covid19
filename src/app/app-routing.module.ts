import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CenterComponent } from './center/center.component';
import { HomeComponent } from './home/home.component';
import { ProtectComponent } from './protect/protect.component';
import { SymptomsComponent } from './symptoms/symptoms.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
