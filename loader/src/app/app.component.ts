import { Component } from '@angular/core';
import {VbLoaderService} from 'vb-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public vbLoaderService: VbLoaderService) {

  }

  showVbLoader() {
    this.vbLoaderService.show();
    setTimeout( ( ) => {
      this.vbLoaderService.hide();
    }, 5000);
  }
}
