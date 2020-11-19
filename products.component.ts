import { ProductService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Products } from '../models/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productRef = new FormGroup({
    _id: new FormControl(),
    pname: new FormControl,
    price: new FormControl
  })
  products: Products[];
  constructor(public productService:ProductService) { }
  result:string;
  ngOnInit(): void {
    this.productService.getProducts().subscribe(result=>{
      this.products = result;
      console.log(this.products);
    })
  }
  
  storeProductDetails():void{
    //console.log(this.productRef.value);
    this.productService.addProducts(this.productRef.value).subscribe(data=>this.result=data.msg);
  }
  deleteProduct(id: any) {
    this.productService.deleteProductsById(id).subscribe((result) => {
      alert('Product Deleted Successfully, reload page to see updated Product list');
    })
  }
  openForm() {
    document.getElementById("updateForm").style.display = "block";
  }
  
  closeForm() {
    document.getElementById("updateForm").style.display = "none";
  }
}
