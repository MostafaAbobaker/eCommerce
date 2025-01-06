import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent {

  idCart?: string | null;
  constructor(private _activatedRoute: ActivatedRoute, private _cartService: CartService) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.idCart = params.get('id')
    })
  }


routerNavigate(url:string) {
  window.location.href = url
}

  ShippingAddressForm: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });

  ShippingAddress() {
    console.log(this.ShippingAddressForm);
    this._cartService.shippingAddress(this.idCart, this.ShippingAddressForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.routerNavigate(res.session.url);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
