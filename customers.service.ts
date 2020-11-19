import { Customers } from './../models/customers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  // URL to web api
  private customersUrl = 'http://localhost:5000/api/customers';
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(this.customersUrl);
  }

  getCustomersById(id: any): Observable<Customers> {
    return this.http.get<Customers>(`${this.customersUrl}/${id}`);
  }

  /*addUsers(users: Users): Observable<any> {
    return this.http.post<any>(this.usersUrl, users, httpOptions);
  }

  updateCompanyById(company: Company, id: any): Observable<Company> {
    return this.http.put<Company>(`${this.companyUrl}/${id}`, company, httpOptions);
  }*/

  deleteCustomersById(id: any): Observable<Customers> {
    return this.http.delete<Customers>(`${this.customersUrl}/${id}`);
  }

}