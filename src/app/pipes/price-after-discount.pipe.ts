import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceAfterDiscount',
  standalone: true
})
export class PriceAfterDiscountPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value.discountPercentage){
      return Math.round(value.price - (value.price * value.discountPercentage / 100))
    }else{
      return value.price
    }
  }

}
