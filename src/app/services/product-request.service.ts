import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {

  constructor(private http : HttpClient) { }

  getAllProduct(){
    return this.http.get('https://dummyjson.com/products')
  }

  getProductById(id: number){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
  
}
