import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workout-dialog',
  templateUrl: './workout-dialog.component.html',
  styleUrls: ['./workout-dialog.component.css']
})
export class WorkoutDialogComponent implements OnInit {

 
  @Input() task1: string;
  @Input() task2: string;
  @Input() task3: string;
  @Input() task4: string;
  @Input() day:string;
  @Output() close= new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }
  onClose(){
     this.close.emit(); 
  }
  
}
