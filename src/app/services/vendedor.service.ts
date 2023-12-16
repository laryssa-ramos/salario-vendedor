import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private _http: HttpClient) { }

  addVendedor(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/vendedores', data);
  }

  getVendedorList(): Observable<any>{
    return this._http.get('http://localhost:3000/vendedores');
  }
}
