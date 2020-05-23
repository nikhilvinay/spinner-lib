import { Component, OnInit } from '@angular/core';
import { VbLoaderService } from './vb-loader.service';

@Component({
  selector: 'vb-loader',
  templateUrl: './vb-loader.component.html',
  styleUrls: ['./vb-loader.component.css']
})
export class VbLoaderComponent implements OnInit {

  constructor(public vbService: VbLoaderService) { }

  ngOnInit() {
  }

}
