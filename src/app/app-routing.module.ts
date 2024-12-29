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
import { VerifyCodeComponent } from './Authorisation/Components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './Authorisation/Components/reset-password/reset-password.component';
import { authGuard } from './Authorisation/Guards/auth.guard';
import { noAuthGuard } from './Authorisation/Guards/no-auth.guard';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { SpecificBrandComponent } from './Component/specific-brand/specific-brand.component';
import { SpecificCatrgoriesComponent } from './Component/specific-catrgories/specific-catrgories.component';

const routes: Routes = [

  { path: '', component:LayoutComponent , children: [
    {path:'', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Home', component:HomeComponent},
    { path: 'Brands', component:BrandsComponent},
    { path: 'Cart',canActivate:[authGuard], component:CartComponent},
    { path: 'Categories',canActivate:[authGuard], component:CategoriesComponent},
    { path: 'Products', component:ProductsComponent},
    { path: 'Product/:id', component:ProductDetailsComponent},
    { path: 'Specific-Brand/:id', component:SpecificBrandComponent},
    { path: 'Specific-Catrgories/:id', component:SpecificCatrgoriesComponent},

    { path: 'Login', canActivate:[noAuthGuard] , component:LoginComponent},
    { path: 'Register', canActivate:[noAuthGuard], component:RegisterComponent},
    { path: 'Signup-oldSchool', canActivate:[noAuthGuard], component:SignupOldSchoolComponent},
    { path: 'Forgot-Password', canActivate:[noAuthGuard], component:ForgotPasswordComponent},
    { path: 'Verify-Code', canActivate:[noAuthGuard], component:VerifyCodeComponent},
    { path: 'Reset-Password', canActivate:[noAuthGuard], component:ResetPasswordComponent},
  ]},

  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
