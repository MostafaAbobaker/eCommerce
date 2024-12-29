import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IBrand } from 'src/app/interfaces/ibrand';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  brandsList!: IBrand[]
  constructor(private _productsService:ProductsService) { }
  ngOnInit(): void {
    this._productsService.getBrands().subscribe({
      next:(result) => {
        this.brandsList = result.data
      },
      error:(err) => {
        console.log(err)
      }
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,

    navSpeed: 700,
    navText: ['<i class="fa-solid fa-circle-chevron-left"></i>', '<i class="fa-solid fa-circle-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
