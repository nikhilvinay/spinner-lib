import { NgModule } from '@angular/core';
import { VbFileUploaderComponent } from './vb-file-uploader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    VbFileUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VbFileUploaderComponent
  ]
})
export class VbFileUploaderModule { }
