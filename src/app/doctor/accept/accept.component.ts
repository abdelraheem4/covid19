import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 
  @ViewChild('callDeleteDailog') callDeleteDailog!:TemplateRef<any> 
userReservation: any;
  constructor(private router:Router,public doctor:DoctorService,public reservation:ReservationService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.doctor.getALLUserReservation();
  }
  
  updateForm:FormGroup = new FormGroup ({
    userid: new FormControl(),
    reserveid: new FormControl(),
    actualdatedose1:new FormControl(),
    actualdatedose2:new FormControl(),
    massage:new FormControl(),
    status:new FormControl(),

  })
 
  p_data:any={};
  openUpdateDailog(userid1:any,reserveid:any,status:any,massage:any,ActualDateDose1:Date,ActualDateDose2:Date
    ){
   debugger
    this.p_data={
      userid:userid1,
      reserveid:reserveid,
      status:status,
      massage:massage
     }
     this.p_data.actualdatedose1 = new Date(ActualDateDose1);
     this.p_data.actualdatedose2 = new Date(ActualDateDose2);
     this.updateForm.controls['userid'].setValue(this.p_data.userid);
    this.updateForm.controls['reserveid'].setValue(this.p_data.reserveid);
    this.updateForm.controls['massage'].setValue(this.p_data.massage);
    this.dialog.open(this.callUpdateDailog);
  }




  savedata(){
    this.reservation.Updatereservation(this.updateForm.value);

}
}
