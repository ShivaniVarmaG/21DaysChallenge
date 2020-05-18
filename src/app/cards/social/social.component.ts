import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SocialDialogComponent } from '../dialog/social-dialog/social-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  message="";
  @ViewChild('appPlaceHolder',{static: true, read: ViewContainerRef}) alertMessage:ViewContainerRef;
  
  private closeSub:Subscription;
  
  constructor(private factoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
  onDay1(){
    const day="Day 1";
    const message="Make your bedroom a ‘no phone-zone’.";
    this.showData(day,message);
  }
  
  onDay2(){
    const day="Day 2";
    const message="Don’t switch on your phone after you wake-up. Trust me the world won’t come to an end.";
    this.showData(day,message);
  }
  
  onDay3(){
    const day="Day 3";
    const message="Switch off all app notifications and email notifications if possible. And dont forget to follow day 1 and day 2";
    this.showData(day,message);
  }
  
  onDay4(){
    const day="Day 4";
    const message="Declutter your apps in your phone and dont forget to remove app that your constantly addicted to.";
    this.showData(day,message);
  }
  
  onDay5(){
    const day="Day 5";
    const message="Today we are increasing our unplugging time. Don’t check your phone for the first 30 minutes and leave your phone when you are having dinner.";
    this.showData(day,message);
  }
  
  onDay6(){
    const day="Day 6";
    const message="Today we go into a more deep cleaning mode. Go through all text messages, old pictures, subscribed newsletters you no longer are interested in receiving etc and deleted them.";
    this.showData(day,message);
  }
  
  onDay7(){
    const day="Day 7";
    const message="Don’t check your phone for an hour after waking up. You can do it!";
    this.showData(day,message);
  }
  
  onDay8(){
    const day="Day 8";
    const message="Don’t check your phone while watching TV, and during lunch and dinner time.";
    this.showData(day,message);
  }
  
  onDay9(){
    const day="Day 9";
    const message="Don’t check your favourite social media app for an entire day. Practise writing your email responses under 5 minutes.";
    this.showData(day,message);
  }
  
  onDay10(){
    const day="Day 10";
    const message="Don’t spend more than 15 minutes at a stretch on your phone use a timer.";
    this.showData(day,message);
  }
  
  onDay11(){
    const day="Day 11";
    const message=" Plan some interesting life event like a family dinner outing and don’t share it on social media.";
    this.showData(day,message);
  }
  
  onDay12(){
    const day="Day 12";
    const message=" Switch off your phone for one full hour and spend some time in nature, or sitting in a park.";
    this.showData(day,message);
  }
  
  onDay13(){
    const day="Day 13";
    const message="Switch off your phone until lunch time and if you want to amp-up the challenge switch it off till evening.";
    this.showData(day,message);
  }
  
  onDay14(){
    const day="Day 14";
    const message=" Leave your phone behind while you go out for a dinner or a movie with your family.";
    this.showData(day,message);
  }
  
  onDay15(){
    const day="Day 15";
    const message="Switch off your phone for a period of 24 hours.";
    this.showData(day,message);
  }
  
  onDay16(){
    const day="Day 16";
    const message="Read some interesting blogs and subscribe to newletters that motivate you to become better.";
    this.showData(day,message);
  }
  
  onDay17(){
    const day="Day 17";
    const message=" Maintain a time-period how much time you will spend on social media in a day after you are done with this digital detox challenge.";
    this.showData(day,message);
  }
  
  onDay18(){
    const day="Day 18";
    const message="Watch some uplifting videos online but don’t spend more than 20 minutes at a stretch.";
    this.showData(day,message);
  }
  
  onDay19(){
    const day="Day 19";
    const message="Today be mindful of not spending more than 5-7 minute on a particular app.";
    this.showData(day,message);
  }
  
  onDay20(){
    const day="Day 20";
    const message="Create mindful, habits like reading three pages of a book instead of phone scrolling.";
    this.showData(day,message);
  }
  
  onDay21(){
    const day="Day 21";
    const message="Make a conscious shift of opening majority of your apps through desktop, if can do without reinstalling certain apps then so be it.";
    this.showData(day,message);
  }
  
  
  private showData(day:string,message:string){
    this.alertMessage.clear();
    const declutter=this.factoryResolver.resolveComponentFactory(SocialDialogComponent);
    const hostViewContainerRef=this.alertMessage.createComponent(declutter);
    
    hostViewContainerRef.instance.day=day;
    hostViewContainerRef.instance.message=message;
    this.closeSub=hostViewContainerRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.alertMessage.clear();
    });
  }
}
