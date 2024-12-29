import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-specific-brand',
  templateUrl: './specific-brand.component.html',
  styleUrls: ['./specific-brand.component.scss']
})
export class SpecificBrandComponent implements OnInit {
  apiErrorMassage :string = '';
  brandId:string | null = null
  products:IProduct[] = []
  constructor(private _productsService:ProductsService, private _activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {this.brandId = params.get('id')});
    if(this.brandId != null) {
      this._productsService.getSpecificBrand(this.brandId).subscribe({
        next:(result) => {
          this.products = result.data;
          console.log(this.products);

        },
        error:(err) => {
          console.log(err)
        }
      });

    }
  }
}
