import { Products } from './../models/products';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  prodRef = new FormGroup({
    _id: new FormControl(),
    type: new FormControl,
    company: new FormControl,
    pname: new FormControl,
    desc: new FormControl,
    img: new FormControl,
    price: new FormControl
  })
  product: Products[];
  companies: Company[];
  result:string;
  constructor(private companyService: CompanyService, private productService: ProductService,
    private _route: ActivatedRoute, private _router: Router,
    private _location: Location) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(result=>{
      this.companies = result;
      console.log(this.companies);
    })
  }
  storeProd():void{
    //console.log(this.productRef.value);
    this.productService.addProducts(this.prodRef.value).subscribe(data=>this.result=data.msg);
    this._location.back();
  }
  goBack(): void{
    this._location.back();
  }
}
