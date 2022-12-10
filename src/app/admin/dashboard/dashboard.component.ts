import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';
import { UserService } from 'src/app/Services/user.service';
import { CreateUserComponent } from '../create-user/create-user.component';
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions={
  Headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dateee:any;
  result:any;
  numberpositive:any;
  numberdeath:any;
  chart:any=[];
  private baseUrl  ='https://api.covidtracking.com/v1/us/daily.json'
  private proxyUrl ='https://cors-anywhere.herokuapp.com/'

  constructor(private http:HttpClient,private router:Router,public home:HomeService,public user:UserService,private dialog:MatDialog) {
    this.user.getALLUser();
    this.user.GetTotalUsers();
    this.user.GetTotalDoctors();
    this.home.gettotalCenters();
  }

  covidData(){
    const url = `${this.proxyUrl}${this.baseUrl}`
    return this.http.get("https://api.covidtracking.com/v1/us/daily.json").toPromise().then((data)=>{
      return data
    })
  }
  



  ngOnInit(): void {
    this.covidData().then((res)=>{
      this.result=res;
      console.log(this.result)

      this.dateee=this.result.map((coin:any)=>coin.date);
      this.numberpositive=this.result.map((coin:any)=>coin.positive);
      console.log(this.dateee,this.numberpositive)

      this.chart = new Chart('canvas',{
        type:'line',
        data: {
          labels:this.dateee,
            datasets: [{
                label: 'Current centers',
                data: this.numberpositive,
                backgroundColor: "rgb(115 185 243 / 65%)",
                borderColor: "#007ee7",
                fill: false,
            },
          ],
        },
      })

    })
  }

  

       

  opendialog()
  {
  this.dialog.open(CreateUserComponent)
  }
}
