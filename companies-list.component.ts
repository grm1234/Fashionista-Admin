import { CompanyService } from './../services/company.service';
import { Company } from './../models/company';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  
  companyRef = new FormGroup({
    _id: new FormControl(),
    name: new FormControl
  })
  companies: Company[];
  result:string;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(result=>{
      this.companies = result;
      console.log(this.companies);
    })
  }
  
  deleteCompany(id: any) {
    this.companyService.deleteCompanyById(id).subscribe((result) => {
      alert('Company Deleted Successfully, reload page to see updated company list');
    })
  }
}
