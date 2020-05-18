import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-declutter-dialog',
  templateUrl: './declutter-dialog.component.html',
  styleUrls: ['./declutter-dialog.component.css']
})
export class DeclutterDialogComponent implements OnInit {

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
