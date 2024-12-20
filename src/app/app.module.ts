import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/Component/navbar/navbar.component';
import { FooterComponent } from './Shared/Component/footer/footer.component';
import { HeaderComponent } from './Shared/Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { CartComponent } from './Component/cart/cart.component';
import { ProductsComponent } from './Component/products/products.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { NotFoundComponent } from './Shared/Component/not-found/not-found.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { CategoriesCardComponent } from './Component/categories-card/categories-card.component';
import { LoginComponent } from './Authorisation/Components/login/login.component';
import { RegisterComponent } from './Authorisation/Components/register/register.component';
import { SignupOldSchoolComponent } from './Authorisation/Components/signup-old-school/signup-old-school.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { ForgotPasswordComponent } from './Authorisation/Components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    NotFoundComponent,
    LayoutComponent,
    CategoriesCardComponent,
    LoginComponent,
    RegisterComponent,
    SignupOldSchoolComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
