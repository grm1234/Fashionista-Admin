import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  result:string;
  id: any;
  product: Products = new Products();
  constructor(private _productService: ProductService,
    private _route: ActivatedRoute, private _router: Router,
    private _location: Location) { }
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._productService.getProductsById(this.id).subscribe(result => {
      this.product = result;
    })
  }

  deleteProd(id: any) {
    this._productService.deleteProductsById(id).subscribe((result) => {
      console.log('Company Deleted Successfully..')
      this._location.back();
    })
  }
  goBack():void{
    this._location.back();
  }

}
