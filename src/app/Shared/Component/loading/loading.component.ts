import { Component } from '@angular/core';
import {  Subject } from 'rxjs';
import { LoadingService } from '../../Services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  isLoading : Subject<boolean> = this._loadingService.isLoading;
  constructor(private _loadingService:LoadingService) { }
}
