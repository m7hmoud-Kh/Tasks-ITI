import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productsCart : Array<any> = []
  constructor(private cartService: CartServiceService){}

  ngOnInit(): void {
    this.cartService.getProductsInCart().subscribe((data: any) =>
      {
        this.productsCart = data
      })

  }
  increaseQuantity(id : number){
    this.productsCart.map((item : any) => {
      if(item.product.id == id && item.quantity < item.product.stock){
        item.quantity++
      }
    })

    this.cartService.updateCart(this.productsCart)
  }

  descreaseQuantity(id : number){
    this.productsCart.map((item : any) => {
      if(item.product.id == id && item.quantity != 1){
        item.quantity--
      }
    })
    this.cartService.updateCart(this.productsCart)
  }

  removeFromCart(id: number){
    this.productsCart =  this.productsCart.filter((item : any) => item.product.id != id)
    this.cartService.updateCart(this.productsCart)
  }


}
