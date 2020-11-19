import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyRef = new FormGroup({
    //_id: new FormControl,
    name: new FormControl
  })
  result:string;
  id: any;
  company: Company = new Company();
  constructor(private _companyService: CompanyService,
    private _route: ActivatedRoute, private _router: Router,
    private _location: Location) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._companyService.getCompanyById(this.id).subscribe(result => {
      this.company = result;

    })
  }

  deleteCompanyById(id: any) {
    this._companyService.deleteCompanyById(id).subscribe((result) => {
      console.log('Company Deleted Successfully..')
      this._location.back();
    })
  }
  updateCompanyDetails():void{
    //console.log(this.productRef.value);
    this._companyService.updateCompanyById((this.companyRef.value),this.id).subscribe((result)=>{
      console.log('Company Updated Successfully..')
      this._location.back();
    })
  }

  goBack(): void {
    this._location.back();
  }

}
