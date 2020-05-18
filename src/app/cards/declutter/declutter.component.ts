import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import  { DeclutterDialogComponent } from '../dialog/declutter-dialog/declutter-dialog.component';
import { PlaceHolderDirective } from 'src/app/shared/placeholder.directive';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-declutter',
  templateUrl: './declutter.component.html',
  styleUrls: ['./declutter.component.css']
})
export class DeclutterComponent implements OnInit {
  message="";
  @ViewChild('appPlaceHolder',{static: true, read: ViewContainerRef}) alertMessage:ViewContainerRef;
  
  private closeSub:Subscription;
  
  constructor(private factoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
  onDay1(){
    const day="Day 1";
    const message="Clean your closet";
    this.showData(day,message);
  }
  
  onDay2(){
    const day="Day 2";
    const message="Organize your books";
    this.showData(day,message);
  }
  
  onDay3(){
    const day="Day 3";
    const message="Clean your hall/drawing room today";
    this.showData(day,message);
  }
  
  onDay4(){
    const day="Day 4";
    const message="Clean your kitchen";
    this.showData(day,message);
  }
  
  onDay5(){
    const day="Day 5";
    const message="Clean your Cabinets";
    this.showData(day,message);
  }
  
  onDay6(){
    const day="Day 6";
    const message="Declutter your desk";
    this.showData(day,message);
  }
  
  onDay7(){
    const day="Day 7";
    const message="Clean your room";
    this.showData(day,message);
  }
  
  onDay8(){
    const day="Day 8";
    const message="Clean your fridge";
    this.showData(day,message);
  }
  
  onDay9(){
    const day="Day 9";
    const message="dont forget to wash your dishes today as soon as your done eating";
    this.showData(day,message);
  }
  
  onDay10(){
    const day="Day 10";
    const message="Clean your garden";
    this.showData(day,message);
  }
  
  onDay11(){
    const day="Day 11";
    const message="Don\'t forget to clean your fans and tubelights";
    this.showData(day,message);
  }
  
  onDay12(){
    const day="Day 12";
    const message="Clean your room and don\'t forget to clean under your bed";
    this.showData(day,message);
  }
  
  onDay13(){
    const day="Day 13";
    const message="Create a \'yes\' and \'no\' pile of things in your room and get rid of \'no\' pile";
    this.showData(day,message);
  }
  
  onDay14(){
    const day="Day 14";
    const message="Declutter your phone today.";
    this.showData(day,message);
  }
  
  onDay15(){
    const day="Day 15";
    const message="Declutter your email today.";
    this.showData(day,message);
  }
  
  onDay16(){
    const day="Day 16";
    const message="Clean your gadgets.";
    this.showData(day,message);
  }
  
  onDay17(){
    const day="Day 17";
    const message="Wash your sheets and put new ones on.";
    this.showData(day,message);
  }
  
  onDay18(){
    const day="Day 18";
    const message="Clean your pantry.";
    this.showData(day,message);
  }
  
  onDay19(){
    const day="Day 19";
    const message="Declutter your playlist and update your playlist.";
    this.showData(day,message);
  }
  
  onDay20(){
    const day="Day 20";
    const message="Organize your cords and cables.";
    this.showData(day,message);
  }
  
  onDay21(){
    const day="Day 21";
    const message="Have a no-clutter zone and keep it clean.";
    this.showData(day,message);
  }
  
  
  private showData(day:string,message:string){
    this.alertMessage.clear();
    const declutter=this.factoryResolver.resolveComponentFactory(DeclutterDialogComponent);
    const hostViewContainerRef=this.alertMessage.createComponent(declutter);
    
    hostViewContainerRef.instance.day=day;
    hostViewContainerRef.instance.message=message;
    this.closeSub=hostViewContainerRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.alertMessage.clear();
    });
  }
}
