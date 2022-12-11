import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService,public user:UserService,private dialog:MatDialog) { }

  updateForm:FormGroup= new FormGroup({
    userid:new FormControl(),
    fullname:new FormControl(),
    username:new FormControl(),
    image:new FormControl(),
    phonenumber:new FormControl(),
    age:new FormControl(),
    numberofvaccines:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    roleid:new FormControl(),
    namevaccine:new FormControl(),
  })
  id:any 
role:any
Number_of_Vaccines:any
namevaccine:any
  ngOnInit(): void {
    this.auth.checkuseroflogin();
   
debugger
    this.id=Number.parseInt( localStorage.getItem("ID"));
    this.role=Number.parseInt( localStorage.getItem("Role"));
    this.Number_of_Vaccines=Number.parseInt(localStorage.getItem("Number_of_Vaccines"));
    this.namevaccine=localStorage.getItem("namevaccine");
    console.log(this.id);
    console.log("ahmad")
   console.log(this.role)
   console.log(this.Number_of_Vaccines)
   console.log(this.namevaccine)
  }




  
  savedata()
  {
    this.updateForm.controls['userid'].setValue(this.id)
    this.updateForm.controls['roleid'].setValue(this.role)
    this.updateForm.controls['numberofvaccines'].setValue(this.Number_of_Vaccines)
    this.updateForm.controls['namevaccine'].setValue(this.namevaccine)
    debugger
    this.user.updateUser(this.updateForm.value);
  }

 
  uploadfile(file:any)
  {
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0]
    const formdata =new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.user.uploadAttachment(formdata);
  }

}
