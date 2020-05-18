import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ProductivityDialogComponent } from '../dialog/productivity-dialog/productivity-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.css']
})
export class ProductivityComponent implements OnInit {

  message="";
  @ViewChild('appPlaceHolder',{static: true, read: ViewContainerRef}) alertMessage:ViewContainerRef;
  
  private closeSub:Subscription;
  
  constructor(private factoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
  onDay1(){
    const day="Day 1";
    const message="Make your bed in the morning(so you wont be tempted to go back there).";
    this.showData(day,message);
  }
  
  onDay2(){
    const day="Day 2";
    const message="Have a nice healthy and energetic breakfast(to have energy for the most productive day of your life)";
    this.showData(day,message);
  }
  
  onDay3(){
    const day="Day 3";
    const message="Organize a cluttered space(you\'re going to feel instantly more productive)";
    this.showData(day,message);
  }
  
  onDay4(){
    const day="Day 4";
    const message="Spend less time on the phone(and be more productive)";
    this.showData(day,message);
  }
  
  onDay5(){
    const day="Day 5";
    const message="Get a planner and use it(plan everything you want to achieve)";
    this.showData(day,message);
  }
  
  onDay6(){
    const day="Day 6";
    const message="Turn off unnecessary notifications on the phone(don\'t let this little machine distract you!)";
    this.showData(day,message);
  }
  
  onDay7(){
    const day="Day 7";
    const message="Create a meal plan for the entire week(so you don\'t waste a lot of time thinking about it everyday)";
    this.showData(day,message);
  }
  
  onDay8(){
    const day="Day 8";
    const message="Make a to-do list(and try to complete all the tasks)";
    this.showData(day,message);
  }
  
  onDay9(){
    const day="Day 9";
    const message="Take a 30 mins walk(to get some fresh air and feel motivated to conqure the world)";
    this.showData(day,message);
  }
  
  onDay10(){
    const day="Day 10";
    const message="Declutter email box(it can be a little overwhelming sometimes)";
    this.showData(day,message);
  }
  
  onDay11(){
    const day="Day 11";
    const message="Exercise for 30mins (even if you don\'t do anything during the day, you will feel super productive after your workout)";
    this.showData(day,message);
  }
  
  onDay12(){
    const day="Day 12";
    const message="Read a chapter of a book before bed(and forget social media)";
    this.showData(day,message);
  }
  
  onDay13(){
    const day="Day 13";
    const message="Don\'t watch TV(so you have more time for yourself)";
    this.showData(day,message);
  }
  
  onDay14(){
    const day="Day 14";
    const message="Organize your closet(and donate everything you don\'t want anymore)";
    this.showData(day,message);
  }
  
  onDay15(){
    const day="Day 15";
    const message="Watch a documentary series(it\'s always good to know more about the world we live in)";
    this.showData(day,message);
  }
  
  onDay16(){
    const day="Day 16";
    const message="Enroll in free course(that you wanted to learn for so long)";
    this.showData(day,message);
  }
  
  onDay17(){
    const day="Day 17";
    const message="Complete a daily puzzle(a fun activity and also brain exercise )";
    this.showData(day,message);
  }
  
  onDay18(){
    const day="Day 18";
    const message="Attend to the garden(you will enjoy sowing and watering those plants)";
    this.showData(day,message);
  }
  
  onDay19(){
    const day="Day 19";
    const message="Start a DIY project(you will learn something new doing this and it will boost your mood)";
    this.showData(day,message);
  }
  
  onDay20(){
    const day="Day 20";
    const message="Drink more water(when you’re dehydrated, you’ll have far less energy. And get less done)";
    this.showData(day,message);
  }
  
  onDay21(){
    const day="Day 21";
    const message="Fix a routine and follow it(this will help you be more productive)";
    this.showData(day,message);
  }
  
  
  private showData(day:string,message:string){
    this.alertMessage.clear();
    const declutter=this.factoryResolver.resolveComponentFactory(ProductivityDialogComponent);
    const hostViewContainerRef=this.alertMessage.createComponent(declutter);
    
    hostViewContainerRef.instance.day=day;
    hostViewContainerRef.instance.message=message;
    this.closeSub=hostViewContainerRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.alertMessage.clear();
    });
  }

}
