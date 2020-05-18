import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-social-dialog',
  templateUrl: './social-dialog.component.html',
  styleUrls: ['./social-dialog.component.css']
})
export class SocialDialogComponent implements OnInit {

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
