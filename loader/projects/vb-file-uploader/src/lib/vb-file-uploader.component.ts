import { Component, OnInit, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import {MDefaultFileUploadCSS, FileProperties} from './IDefaultFileUpload';
@Component({
  selector: 'vb-file-uploader',
  templateUrl: './vb-file-uploader.component.html',
  styleUrls: ['./vb-file-uploader.component.css']
})
export class VbFileUploaderComponent implements OnInit {
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  @Input() border = '2px solid gray';
  @Input() color = 'gray';
  @Input() bg = '#white';
  @Input() pd = '8px 20px';
  @Input() br = '8px';
  @Input() fs = '20px';
  @Input() fw = '700';
  @Input() btnTxt = 'Upload File';
  @Input() isMultipleFileAllowed = false;
  public defaultStyleForUploadFileButton: MDefaultFileUploadCSS = {};
  public fileProperties: FileProperties = {};
  public uploadedFile: Set<File> = new Set();
  public selectedFileNames: { name: string, link: string }[] = [];
  constructor() { }

  ngOnInit() {
    this.defaultStyleForUploadFileButton.border = this.border;
    this.defaultStyleForUploadFileButton.color = this.color;
    this.defaultStyleForUploadFileButton.backgroundColor = this.bg;
    this.defaultStyleForUploadFileButton.borderRadius = this.br;
    this.defaultStyleForUploadFileButton.fontSize = this.fs;
    this.defaultStyleForUploadFileButton.fontWeight = this.fw;
    this.defaultStyleForUploadFileButton.btnTxt = this.btnTxt;
    this.fileProperties.isMultiple = this.isMultipleFileAllowed;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.defaultStyleForUploadFileButton.border = changes.border.currentValue;
    this.defaultStyleForUploadFileButton.color = changes.color.currentValue;
    this.defaultStyleForUploadFileButton.backgroundColor = changes.bg.currentValue;
    this.defaultStyleForUploadFileButton.borderRadius = changes.br.currentValue;
    this.defaultStyleForUploadFileButton.fontSize = changes.fs.currentValue;
    this.defaultStyleForUploadFileButton.fontWeight = changes.fw.currentValue;
    this.fileProperties.isMultiple = changes.isMultipleFileAllowed.currentValue;
  }

  processUploadedFiles() {
    const formData = new FormData();
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < fileUpload.files.length; index++) {
        const reader = new FileReader();
        const file: File = fileUpload.files[index];
        const format = file.name.split('.')[1];
        reader.readAsDataURL(file);
        reader.onload = () => {
          formData.append('file', file, file.name);
          this.uploadedFile.add(file);
        };
        this.selectedFileNames.push({name: file.name, link: null});
      }
      this.fileUpload.nativeElement.value = '';
    };
    fileUpload.onEnd = () => {
      this.fileUpload.nativeElement.value = '';
    };
    fileUpload.click();
  }

}
