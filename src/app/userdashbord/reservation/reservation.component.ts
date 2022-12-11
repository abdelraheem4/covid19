import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { DoctorService } from 'src/app/Services/doctor.service';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {
  createForm:FormGroup = new FormGroup ({
    actualdatedose1:new FormControl('',Validators.required),
    actualdatedose2:new FormControl('',Validators.required),
    massage:new FormControl(),
    Status:new FormControl(),
    userid:new FormControl()
  })
  id:any 
  P_data:any={};
  constructor(private route:Router,private auth:AuthService,public doctor:DoctorService,public reservation:ReservationService ,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.auth.checkuseroflogin();
    this.doctor.getALLUserReservation();

    this.id=Number.parseInt( localStorage.getItem("ID"));
    console.log(this.id);

  }
  saveCREATEData(){
    this.createForm.controls['userid'].setValue(this.id)
    debugger
    this.reservation.createreservation(this.createForm.value);
  
  }
}
