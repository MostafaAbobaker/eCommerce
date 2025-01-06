import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-specific-catrgories',
  templateUrl: './specific-catrgories.component.html',
  styleUrls: ['./specific-catrgories.component.scss']
})
export class SpecificCatrgoriesComponent implements OnInit {
  categoryId:string | null = null
  products: IProduct[] = [];
  apiErrorMassage: string = '';
  constructor(private _activatedRoute:ActivatedRoute, private _productsService:ProductsService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.categoryId = params.get('id')
    });

    if(this.categoryId) {
      this._productsService.getSpecificCategory(this.categoryId).subscribe({
        next:(result) => {
          console.log(result)
          this.products = result.data
        },
        error:(err) => {
          console.log(err)
          this.apiErrorMassage = err.error.message
        }
      })
    }
  }

}
