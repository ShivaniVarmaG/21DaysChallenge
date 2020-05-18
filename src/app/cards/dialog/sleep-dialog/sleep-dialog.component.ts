import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sleep-dialog',
  templateUrl: './sleep-dialog.component.html',
  styleUrls: ['./sleep-dialog.component.css']
})
export class SleepDialogComponent implements OnInit {

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
