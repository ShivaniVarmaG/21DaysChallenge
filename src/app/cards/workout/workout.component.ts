import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkoutDialogComponent } from '../dialog/workout-dialog/workout-dialog.component';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  task1="";
  task2="";
  task3="";
  task4="";
  
  @ViewChild('appPlaceHolder',{static: true, read: ViewContainerRef}) alertMessage:ViewContainerRef;
  
  private closeSub:Subscription;
  
  constructor(private factoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
  onDay1(){
    const day="Day 1";
    const task1="20 sit ups";
    const task2="20 squats";
    const task3="10 pusp ups";
    const task4="30 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay2(){
    const day="Day 2";
    const task1="15 burpees";
    const task2="20 leg raises";
    const task3="20 jumping jacks";
    const task4="30 sec wall sit";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay3(){
    const day="Day 3";
    const task1="20 squats";
    const task2="20 high kicks";
    const task3="10 pusp ups";
    const task4="30 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay4(){
    const day="Day 4";
    const task1="200 skips";
    const task2="20 squats";
    const task3="10 cross knees";
    const task4="30 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay5(){
    const day="Day 5";
    const task1="20 mountain climbers";
    const task2="20 squats";
    const task3="10 pusp ups";
    const task4="30 sec wall sit";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay6(){
    const day="Day 6";
    const task1="20 sit ups";
    const task2="20 squats";
    const task3="40 wall push ups";
    const task4="30 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay7(){
    const day="Day 7";
    const task1="200 skips";
    const task2="30 squats";
    const task3="10 pusp ups";
    const task4="30 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay8(){
    const day="Day 8";
    const task1="40 burpees";
    const task2="40 squats";
    const task3="10 leg raises";
    const task4="45 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay9(){
    const day="Day 9";
    const task1="20 lunges";
    const task2="20 frog jumps";
    const task3="10 pusp ups";
    const task4="45 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay10(){
    const day="Day 10";
    const task1="250 skips";
    const task2="40 squats";
    const task3="10 pusp ups";
    const task4="45 sec wall sit";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay11(){
    const day="Day 11";
    const task1="20 sit ups";
    const task2="20 squats";
    const task3="10 pusp ups";
    const task4="45 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay12(){
    const day="Day 12";
    const task1="50 sit ups";
    const task2="50 squats";
    const task3="40 burpees";
    const task4="45 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay13(){
    const day="Day 13";
    const task1="30 jumpings jacks";
    const task2="50 squats";
    const task3="40 burpees";
    const task4="45 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay14(){
    const day="Day 14";
    const task1="200 skips";
    const task2="20 squats";
    const task3="10 cross knees";
    const task4="45 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay15(){
    const day="Day 15";
    const task1="40 burpees";
    const task2="40 squats";
    const task3="10 leg raises";
    const task4="60 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay16(){
    const day="Day 16";
    const task1="200 skips";
    const task2="30 squats";
    const task3="10 pusp ups";
    const task4="60 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay17(){
    const day="Day 17";
    const task1="50 sit ups";
    const task2="50 squats";
    const task3="40 burpees";
    const task4="60 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay18(){
    const day="Day 18";
    const task1="250 skips";
    const task2="40 squats";
    const task3="10 pusp ups";
    const task4="60 sec wall sit";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay19(){
    const day="Day 19";
    const task1="20 mountain climbers";
    const task2="20 squats";
    const task3="10 pusp ups";
    const task4="60 sec wall sit";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay20(){
    const day="Day 20";
    const task1="200 skips";
    const task2="20 squats";
    const task3="10 cross knees";
    const task4="60 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  onDay21(){
    const day="Day 21";
    const task1="50 sit ups";
    const task2="50 squats";
    const task3="15 pusp ups";
    const task4="60 sec planks";
    this.showData(day,task1,task2,task3,task4);
  }
  
  
  private showData(day:string,task1:string,task2:string,task3:string,task4:string){
    this.alertMessage.clear();
    const declutter=this.factoryResolver.resolveComponentFactory(WorkoutDialogComponent);
    const hostViewContainerRef=this.alertMessage.createComponent(declutter);
    
    hostViewContainerRef.instance.day=day;
    hostViewContainerRef.instance.task1=task1;
    hostViewContainerRef.instance.task2=task2;
    hostViewContainerRef.instance.task3=task3;
    hostViewContainerRef.instance.task4=task4;
    this.closeSub=hostViewContainerRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.alertMessage.clear();
    });
  }

}
