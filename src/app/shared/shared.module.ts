import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
  ],

  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    
  ]
 
 
})
export class SharedModule { }
