import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  productCartCount : number = 0;
  constructor(private cartService : CartServiceService){}
  ngOnInit(): void {
    this.cartService.getProductsInCart().subscribe((data: Array<any>) =>
      this.productCartCount = data.length)
  }
  
}
