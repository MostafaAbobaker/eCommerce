import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productUrl:string |null  = null
  errorMassage!:string
  productDetails ?:IProduct
  inputQuantity: number = 1
  addFavorite: boolean = false
  constructor(
    private _activatedRoute:ActivatedRoute ,
    private _productsService:ProductsService,
    private _cartService:CartService,
    private _wishlistService: WishlistService,
  ) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.productUrl = params.get('id')
    });
    if(this.productUrl != null) {
      this._productsService.getProductDetails(this.productUrl).subscribe({
        next:(result) => {
          this.productDetails = result.data
          console.log(result)

        },
        error:(err) => {
          this.errorMassage = err.error.message

        }
      })
    }

  }
  /* countItem() {
    this.inputQuantity++
  }
  decreaseQuantity() {
    if(this.inputQuantity > 1) {
      this.inputQuantity--
    }
  } */
    addCartItem(id:string){
    if(this.productDetails != undefined){
      this._cartService.addCartItem(id).subscribe({
        next:(result) => {
          console.log(result)
          this._cartService.CartItemNumber.next(result.numOfCartItems)

        },
        error:(err) => {
          console.log(err)
        }
      })
    }
  }

  addWish(product_id:string){
    this._wishlistService.addWishlistItem(product_id).subscribe({
      next:(data) => {
        this.addFavorite = true;
        this._wishlistService.WishlistNumber.next(data.data.length);
        this._wishlistService.WishlistProducts.next(data.data)
      },
      error:(err) => {  console.log(err) }
    });
  }
}
