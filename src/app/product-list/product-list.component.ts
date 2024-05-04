import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductRequestService } from '../services/product-request.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  ProductsList : any = []

  constructor(private ProductRequest: ProductRequestService){}

  ngOnInit(): void {
    this.ProductRequest.getAllProduct().subscribe((data : any) => this.ProductsList = data.products)
  }
}
