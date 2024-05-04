import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: any;
  productInCart : Array<any> = [];
  constructor(private cartSevice: CartServiceService){}

  AddToCart(id : number){
    this.cartSevice.getProductsInCart().subscribe((data : any) => this.productInCart = data)
    if(this.productInCart.some((item: any) => item.product.id == id)){
      this.productInCart.map((item : any) =>  {
        if(item.product.id == id){
          item.quantity++
        }
      })
    }else{
      const newProduct  = {
      'product' : this.product,
      'quantity': 1
      }
      this.productInCart = [
        ...this.productInCart,
        newProduct
      ]
      this.cartSevice.updateCart(this.productInCart)
    }
  }

}
