import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/interfaces/icategory';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent {
@Input() category!: ICategory ;
}
