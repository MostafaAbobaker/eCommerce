import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { ForgotPasswordComponent } from './Authorisation/Components/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './Authorisation/Components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './Authorisation/Components/reset-password/reset-password.component';
import { ProductComponent } from './Component/product/product.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { HomeMainCarouselComponent } from './Component/home-main-carousel/home-main-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrandItemComponent } from './Component/brand-item/brand-item.component';
import { SpecificBrandComponent } from './Component/specific-brand/specific-brand.component';
import { SpecificCatrgoriesComponent } from './Component/specific-catrgories/specific-catrgories.component';
import { AuthInterceptor } from './Interceptor/auth.interceptor';

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
    ForgotPasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    ProductComponent,
    ProductDetailsComponent,
    HomeMainCarouselComponent,
    BrandItemComponent,
    SpecificBrandComponent,
    SpecificCatrgoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
