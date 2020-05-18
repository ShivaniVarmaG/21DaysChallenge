import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { GratitudeDialogComponent } from '../dialog/gratitude-dialog/gratitude-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.css']
})
export class GratitudeComponent implements OnInit {

  message="";
  @ViewChild('appPlaceHolder',{static: true, read: ViewContainerRef}) alertMessage:ViewContainerRef;
  
  private closeSub:Subscription;
  
  constructor(private factoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
  onDay1(){
    const day="Day 1";
    const message="For Family and Friends";
    this.showData(day,message);
  }
  
  onDay2(){
    const day="Day 2";
    const message="For your health";
    this.showData(day,message);
  }
  
  onDay3(){
    const day="Day 3";
    const message="For your work";
    this.showData(day,message);
  }
  
  onDay4(){
    const day="Day 4";
    const message="For all the good and bad things happening in your life right now.";
    this.showData(day,message);
  }
  
  onDay5(){
    const day="Day 5";
    const message="For food and water that get to have.";
    this.showData(day,message);
  }
  
  onDay6(){
    const day="Day 6";
    const message="For that support system in your life.";
    this.showData(day,message);
  }
  
  onDay7(){
    const day="Day 7";
    const message="For this life.";
    this.showData(day,message);
  }
  
  private showData(day:string,message:string){
    this.alertMessage.clear();
    const declutter=this.factoryResolver.resolveComponentFactory(GratitudeDialogComponent);
    const hostViewContainerRef=this.alertMessage.createComponent(declutter);
    
    hostViewContainerRef.instance.day=day;
    hostViewContainerRef.instance.message=message;
    this.closeSub=hostViewContainerRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.alertMessage.clear();
    });
  }

}
