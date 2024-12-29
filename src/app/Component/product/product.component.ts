import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!:IProduct

  constructor(private _cartService:CartService) { }

  addToCart(product_id:string){

    this._cartService.addCartItem(product_id).subscribe({
      next:(result) => {
        console.log(result) },
      error:(err) => {  console.log(err) }
    });
  }
}
