import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudyDialogComponent } from '../dialog/study-dialog/study-dialog.component';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  message="";
  @ViewChild('appPlaceHolder',{static: true, read: ViewContainerRef}) alertMessage:ViewContainerRef;
  
  private closeSub:Subscription;
  
  constructor(private factoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
  onDay1(){
    const day="Day 1";
    const message="Have a schedule and always take notes";
    this.showData(day,message);
  }
  
  onDay2(){
    const day="Day 2";
    const message="Hand write your notes and highlight key words";
    this.showData(day,message);
  }
  
  onDay3(){
    const day="Day 3";
    const message="Learn the same information in a variety of ways.";
    this.showData(day,message);
  }
  
  onDay4(){
    const day="Day 4";
    const message=" Study multiple subjects each day, rather than focusing on just one or two subjects.";
    this.showData(day,message);
  }
  
  onDay5(){
    const day="Day 5";
    const message="Don’t multitask.Finish one subject before you move to another";
    this.showData(day,message);
  }
  
  onDay6(){
    const day="Day 6";
    const message="Simplify, summarize, and compress the information what you have learned today.";
    this.showData(day,message);
  }
  
  onDay7(){
    const day="Day 7";
    const message=" Write down your worries and get it out of your system. This will help you to focus more when you sit down to study";
    this.showData(day,message);
  }
  
  onDay8(){
    const day="Day 8";
    const message="Test yourself frequently.Once done study always take a test.";
    this.showData(day,message);
  }
  
  onDay9(){
    const day="Day 9";
    const message="Connect what you’re learning with something you already know. This way you will get more knowledge on your subject";
    this.showData(day,message);
  }
  
  onDay10(){
    const day="Day 10";
    const message="Read key information out loud.";
    this.showData(day,message);
  }
  
  onDay11(){
    const day="Day 11";
    const message="Take regular study breaks";
    this.showData(day,message);
  }
  
  onDay12(){
    const day="Day 12";
    const message="Reward yourself at the end of each study session.";
    this.showData(day,message);
  }
  
  onDay13(){
    const day="Day 13";
    const message="Today focus on the process, not the outcome.";
    this.showData(day,message);
  }
  
  onDay14(){
    const day="Day 14";
    const message="Drink at least eight glasses of water a day.";
    this.showData(day,message);
  }
  
  onDay15(){
    const day="Day 15";
    const message="Exercise at least three times a week. It not only improves your health about also helps you to focus more.";
    this.showData(day,message);
  }
  
  onDay16(){
    const day="Day 16";
    const message="Sleep at least eight hours a night, and don’t pull all-nighters.";
    this.showData(day,message);
  }
  
  onDay17(){
    const day="Day 17";
    const message="Use a smart study app";
    this.showData(day,message);
  }
  
  onDay18(){
    const day="Day 18";
    const message="Block distractions";
    this.showData(day,message);
  }
  
  onDay19(){
    const day="Day 19";
    const message="Today try to study smart rather than to study hard.";
    this.showData(day,message);
  }
  
  onDay20(){
    const day="Day 20";
    const message="Change your surroundings and make is comfortable for studying.";
    this.showData(day,message);
  }
  
  onDay21(){
    const day="Day 21";
    const message="practice everything you have learned today.";
    this.showData(day,message);
  }
  
  
  private showData(day:string,message:string){
    this.alertMessage.clear();
    const declutter=this.factoryResolver.resolveComponentFactory(StudyDialogComponent);
    const hostViewContainerRef=this.alertMessage.createComponent(declutter);
    
    hostViewContainerRef.instance.day=day;
    hostViewContainerRef.instance.message=message;
    this.closeSub=hostViewContainerRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.alertMessage.clear();
    });
  }

}
