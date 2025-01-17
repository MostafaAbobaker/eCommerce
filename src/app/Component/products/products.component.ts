import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 searchInput:string = '';
 searchSubscription: Subscription | undefined

  productsItems: IProduct[] = [];
  constructor(private _productsService:ProductsService) { }
  ngOnInit(): void {
    this.searchSubscription = this._productsService.currentSearchText.subscribe(text => { this.searchInput = text; });

    this._productsService.getProducts().subscribe({
      next:(response) => {
        this.productsItems = response.data
        console.log('All Products => ',response)
      },
      error:(err) => {console.log(err)}

    })
  }
}
