import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-study-dialog',
  templateUrl: './study-dialog.component.html',
  styleUrls: ['./study-dialog.component.css']
})
export class StudyDialogComponent implements OnInit {

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
