import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private CartProducts: any = new BehaviorSubject([])
  private total : any = new BehaviorSubject(0)
  constructor() { }
  getProductsInCart(){
    return this.CartProducts.asObservable();
  }

  getProductLength(){
    return this.CartProducts.length().asObservable();
  }

  updateCart(allProducts: any){
    this.CartProducts.next(allProducts)
  }

}
