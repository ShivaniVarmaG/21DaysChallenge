import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-happiness-dialog',
  templateUrl: './happiness-dialog.component.html',
  styleUrls: ['./happiness-dialog.component.css']
})
export class HappinessDialogComponent implements OnInit {

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
