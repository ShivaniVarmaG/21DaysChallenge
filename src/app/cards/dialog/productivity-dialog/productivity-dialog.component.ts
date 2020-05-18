import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productivity-dialog',
  templateUrl: './productivity-dialog.component.html',
  styleUrls: ['./productivity-dialog.component.css']
})
export class ProductivityDialogComponent implements OnInit {

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
