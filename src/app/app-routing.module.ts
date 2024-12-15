import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { CartComponent } from './Component/cart/cart.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { ProductsComponent } from './Component/products/products.component';
import { NotFoundComponent } from './Shared/Component/not-found/not-found.component';
import { LayoutComponent } from './Component/layout/layout.component';

const routes: Routes = [

  { path: '', component:LayoutComponent , children: [
    {path:'', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Home', component:HomeComponent},
    { path: 'Brands', component:BrandsComponent},
    { path: 'Cart', component:CartComponent},
    { path: 'Categories', component:CategoriesComponent},
    { path: 'Products', component:ProductsComponent},
  ]},

  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
