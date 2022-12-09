import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CenterComponent } from './center/center.component';
import { HomeComponent } from './home/home.component';
// import { AuthorizationGuard } from './authorization.guard';

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
     //canActivate:[AuthorizationGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
