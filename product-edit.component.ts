import { ProductService } from './../services/products.service';
import { Products } from './../models/products';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  prodRef = new FormGroup({
    //_id: new FormControl,
    pname: new FormControl,
    desc: new FormControl,
    price: new FormControl,
    img: new FormControl
  })
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
  updateProd():void{
    //console.log(this.productRef.value);
    this._productService.updateProductsById((this.prodRef.value),this.id).subscribe((result)=>{
      console.log('Product Updated Successfully..')
      this._location.back();
    })
  }
  deleteProd(id: any) {
    this._productService.deleteProductsById(id).subscribe((result) => {
      console.log('Product Deleted Successfully..')
      this._location.back();
    })
  }
  goBack(): void {
    this._location.back();
  }
}
