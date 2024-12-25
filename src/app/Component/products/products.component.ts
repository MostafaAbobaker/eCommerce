import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsItems: IProduct[] = [];
  constructor(private _productsService:ProductsService) { }
  ngOnInit(): void {
    this._productsService.getProducts().subscribe({
      next:(response) => {
        this.productsItems = response.data
        console.log(this.productsItems)
      },
      error:(err) => {console.log(err)}

    })
  }
}
