import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { HappinessDialogComponent } from '../dialog/happiness-dialog/happiness-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrls: ['./happiness.component.css']
})
export class HappinessComponent implements OnInit {

  message="";
  @ViewChild('appPlaceHolder',{static: true, read: ViewContainerRef}) alertMessage:ViewContainerRef;
  
  private closeSub:Subscription;
  
  constructor(private factoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
  onDay1(){
    const day="Day 1";
    const message="Listen to your favorite song.";
    this.showData(day,message);
  }
  
  onDay2(){
    const day="Day 2";
    const message="Spend less time on your Phone.";
    this.showData(day,message);
  }
  
  onDay3(){
    const day="Day 3";
    const message="Exercise.";
    this.showData(day,message);
  }
  
  onDay4(){
    const day="Day 4";
    const message="Cook the dinner.";
    this.showData(day,message);
  }
  
  onDay5(){
    const day="Day 5";
    const message="Hug someone you love.";
    this.showData(day,message);
  }
  
  onDay6(){
    const day="Day 6";
    const message="Watch a funny movie.";
    this.showData(day,message);
  }
  
  onDay7(){
    const day="Day 7";
    const message="Dance like nobody\'s watching.";
    this.showData(day,message);
  }
  
  onDay8(){
    const day="Day 8";
    const message="Call a friend.";
    this.showData(day,message);
  }
  
  onDay9(){
    const day="Day 9";
    const message="Go out into nature and be an explore for a day.";
    this.showData(day,message);
  }
  
  onDay10(){
    const day="Day 10";
    const message="Buy a gift for someone you love.";
    this.showData(day,message);
  }
  
  onDay11(){
    const day="Day 11";
    const message="Try yoga.";
    this.showData(day,message);
  }
  
  onDay12(){
    const day="Day 12";
    const message="Go to bed and wake up early.";
    this.showData(day,message);
  }
  
  onDay13(){
    const day="Day 13";
    const message="Read something inspiring.";
    this.showData(day,message);
  }
  
  onDay14(){
    const day="Day 14";
    const message="Give a sincere compliment.";
    this.showData(day,message);
  }
  
  onDay15(){
    const day="Day 15";
    const message="Express your gratitude for what is too often taken for granted.";
    this.showData(day,message);
  }
  
  onDay16(){
    const day="Day 16";
    const message="Share some of your tasty homemade food.";
    this.showData(day,message);
  }
  
  onDay17(){
    const day="Day 17";
    const message=" Share a Spotify-playlist with the most inspiring and uplifting songs you know.";
    this.showData(day,message);
  }
  
  onDay18(){
    const day="Day 18";
    const message="Give a stranger a compliment.";
    this.showData(day,message);
  }
  
  onDay19(){
    const day="Day 19";
    const message=" Run an errand or do one chore that you kept procrastinating.";
    this.showData(day,message);
  }
  
  onDay20(){
    const day="Day 20";
    const message="Help someone today.";
    this.showData(day,message);
  }
  
  onDay21(){
    const day="Day 21";
    const message="Smile More everyday. ";
    this.showData(day,message);
  }
  
  
  private showData(day:string,message:string){
    this.alertMessage.clear();
    const declutter=this.factoryResolver.resolveComponentFactory(HappinessDialogComponent);
    const hostViewContainerRef=this.alertMessage.createComponent(declutter);
    
    hostViewContainerRef.instance.day=day;
    hostViewContainerRef.instance.message=message;
    this.closeSub=hostViewContainerRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.alertMessage.clear();
    });
  }

}
