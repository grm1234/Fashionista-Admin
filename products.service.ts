import { Products } from './../models/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // URL to web api
  private productsUrl = 'http://localhost:5000/api/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productsUrl);
  }

  getProductsById(id: any): Observable<Products> {
    return this.http.get<Products>(`${this.productsUrl}/${id}`);
  }

  addProducts(products: Products): Observable<any> {
    return this.http.post<any>(this.productsUrl, products, httpOptions);
  }

  updateProductsById(products: Products, id: any): Observable<Products> {
    return this.http.put<Products>(`${this.productsUrl}/${id}`, products, httpOptions);
  }

  deleteProductsById(id: any): Observable<Products> {
    return this.http.delete<Products>(`${this.productsUrl}/${id}`);
  }

}