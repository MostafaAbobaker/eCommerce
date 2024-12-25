import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

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

  constructor(private _activatedRoute:ActivatedRoute ,private _productsService:ProductsService) { }
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
  increaseQuantity() {
    this.inputQuantity++
  }
  decreaseQuantity() {
    if(this.inputQuantity > 1) {
      this.inputQuantity--
    }
  }
}
