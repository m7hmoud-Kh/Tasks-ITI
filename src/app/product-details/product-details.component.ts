import { Component, Input } from '@angular/core';
import { PriceAfterDiscountPipe } from '../pipes/price-after-discount.pipe';
import { ProductRequestService } from '../services/product-request.service';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [PriceAfterDiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() id : any;
  product : any;
  productInCart : Array<any> = [];

  constructor(private productRequest : ProductRequestService, private cartSevice: CartServiceService){}
  ngOnInit(): void {
    this.productRequest.getProductById(this.id).subscribe((data) => this.product = data)
  }

  AddToCart(){
    this.cartSevice.getProductsInCart().subscribe((data : any) => this.productInCart = data)
    if(this.productInCart.some((item: any) => item.product.id == this.id)){
      this.productInCart.map((item : any) =>  {
        if(item.product.id == this.id){
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
