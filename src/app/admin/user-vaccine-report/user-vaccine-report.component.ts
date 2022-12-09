import { Component, OnInit } from '@angular/core';
import { VaccinesService } from 'src/app/Services/vaccines.service';

@Component({
  selector: 'app-user-vaccine-report',
  templateUrl: './user-vaccine-report.component.html',
  styleUrls: ['./user-vaccine-report.component.css']
})
export class UserVaccineReportComponent implements OnInit{
  constructor(public vaccineReport:VaccinesService) { }
  ngOnInit(): void {
    this.vaccineReport.GetCertificateVaccine();
  }

}
