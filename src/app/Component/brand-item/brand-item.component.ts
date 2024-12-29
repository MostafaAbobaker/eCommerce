import { Component, Input } from '@angular/core';
import { IBrand } from 'src/app/interfaces/ibrand';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.scss']
})
export class BrandItemComponent {
  @Input() brand!: IBrand;
}
