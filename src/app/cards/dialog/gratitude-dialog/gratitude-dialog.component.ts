import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gratitude-dialog',
  templateUrl: './gratitude-dialog.component.html',
  styleUrls: ['./gratitude-dialog.component.css']
})
export class GratitudeDialogComponent implements OnInit {
  
  @Input() message: string;
  @Input() day:string;
  @Output() close= new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onClose(){
    this.close.emit(); 
 }

}
