import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from "../models/users";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL to web api
  private customersUrl = 'http://localhost:5000/api/users';
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.customersUrl);
  }

  getCustomersById(id: any): Observable<Users> {
    return this.http.get<Users>(`${this.customersUrl}/${id}`);
  }

  /*addUsers(users: Users): Observable<any> {
    return this.http.post<any>(this.usersUrl, users, httpOptions);
  }

  updateCompanyById(company: Company, id: any): Observable<Company> {
    return this.http.put<Company>(`${this.companyUrl}/${id}`, company, httpOptions);
  }*/

  deleteCustomersById(id: any): Observable<Users> {
    return this.http.delete<Users>(`${this.customersUrl}/${id}`);
  }

}