import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';
import { UserService } from 'src/app/Services/user.service';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router:Router,public home:HomeService,public user:UserService,private dialog:MatDialog) { 
    this.user.getALLUser();
    this.user.GetTotalUsers();
    this.user.GetTotalDoctors();
    this.home.gettotalCenters();


  }



  ngOnInit(): void {
  }

  opendialog()
  {
  this.dialog.open(CreateUserComponent)
  }
}
