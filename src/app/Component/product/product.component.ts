import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  @Input() product!:IProduct
  xNumber:number = 0;

  WishlistProducts: string[] =[]
  constructor(private _cartService:CartService , private _wishlistService:WishlistService, private toastr: ToastrService) { }
  ngOnInit(): void {
this._wishlistService.WishlistProducts.subscribe((productId)=> this.WishlistProducts = productId)  }

  addToCart(product_id:string){

    this._cartService.addCartItem(product_id).subscribe({
      next:(result) => {
        console.log(result)
        this.toastr.success(result.message, 'Added Successfully', {
          closeButton: true,
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing'
        });

        this._cartService.CartItemNumber.next(result.numOfCartItems);
        // this._wishlistService.WishlistNumber.next(result.data.length)

      },
      error:(err) => {  console.log(err) }
    });
  }
  addWish(product_id:string){
    this._wishlistService.addWishlistItem(product_id).subscribe({
      next:(data) => {
        console.log(data);
        this.toastr.success(data.message, 'Added Successfully', {
          closeButton: true,
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing'
        });

        this._wishlistService.WishlistNumber.next(data.data.length);
        this._wishlistService.WishlistProducts.next(data.data)
      },
      error:(err) => {  console.log(err) }
    });
  }
  compareItemWishlistInProduct(product_id:string) {
    return this.WishlistProducts.includes(product_id)
  }
}
