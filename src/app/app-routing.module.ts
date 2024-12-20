import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { CartComponent } from './Component/cart/cart.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { ProductsComponent } from './Component/products/products.component';
import { NotFoundComponent } from './Shared/Component/not-found/not-found.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { LoginComponent } from './Authorisation/Components/login/login.component';
import { RegisterComponent } from './Authorisation/Components/register/register.component';
import { SignupOldSchoolComponent } from './Authorisation/Components/signup-old-school/signup-old-school.component';
import { ForgotPasswordComponent } from './Authorisation/Components/forgot-password/forgot-password.component';

const routes: Routes = [

  { path: '', component:LayoutComponent , children: [
    {path:'', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Home', component:HomeComponent},
    { path: 'Brands', component:BrandsComponent},
    { path: 'Cart', component:CartComponent},
    { path: 'Categories', component:CategoriesComponent},
    { path: 'Products', component:ProductsComponent},
    { path: 'Login', component:LoginComponent},
    { path: 'Register', component:RegisterComponent},
    { path: 'Signup-oldSchool', component:SignupOldSchoolComponent},
    { path: 'Forgot-Password', component:ForgotPasswordComponent},
  ]},

  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
