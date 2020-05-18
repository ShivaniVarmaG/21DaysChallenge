import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subscription } from 'rxjs';
import { SleepDialogComponent } from '../dialog/sleep-dialog/sleep-dialog.component';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit {

  message="";
  @ViewChild('appPlaceHolder',{static: true, read: ViewContainerRef}) alertMessage:ViewContainerRef;
  
  private closeSub:Subscription;
  
  constructor(private factoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
  onDay1(){
    const day="Day 1";
    const message="Listen to sleep song/music";
    this.showData(day,message);
  }
  
  onDay2(){
    const day="Day 2";
    const message="No phone before 1 hour to bed and get your brain ready to bed";
    this.showData(day,message);
  }
  
  onDay3(){
    const day="Day 3";
    const message="Exercise at least once a day";
    this.showData(day,message);
  }
  
  onDay4(){
    const day="Day 4";
    const message="Say no to evening naps";
    this.showData(day,message);
  }
  
  onDay5(){
    const day="Day 5";
    const message="Dont skip any meal of the day and no Late night snacks";
    this.showData(day,message);
  }
  
  onDay6(){
    const day="Day 6";
    const message="Get A schedule fix everyday for bed time and stick to it";
    this.showData(day,message);
  }
  
  onDay7(){
    const day="Day 7";
    const message="Practice Yoga, Meditation and Mindfulness";
    this.showData(day,message);
  }
  
  onDay8(){
    const day="Day 8";
    const message="Today when you sleep,do not look at your clock and focus on your breath";
    this.showData(day,message);
  }
  
  onDay9(){
    const day="Day 9";
    const message="Use the 4-7-8 Breathing Method";
    this.showData(day,message);
  }
  
  onDay10(){
    const day="Day 10";
    const message=" Get comfortable(make your bed and get evrything done before going to sleep";
    this.showData(day,message);
  }
  
  onDay11(){
    const day="Day 11";
    const message="Turn Off All Electronics";
    this.showData(day,message);
  }
  
  onDay12(){
    const day="Day 12";
    const message="Practice Journaling";
    this.showData(day,message);
  }
  
  onDay13(){
    const day="Day 13";
    const message="Limit Caffeine and Drink a Soothing Beverage";
    this.showData(day,message);
  }
  
  onDay14(){
    const day="Day 14";
    const message="Drink warm milk before bed";
    this.showData(day,message);
  }
  
  onDay15(){
    const day="Day 15";
    const message="Read something before going to bed";
    this.showData(day,message);
  }
  
  onDay16(){
    const day="Day 16";
    const message="Try visualize things that make you happy ";
    this.showData(day,message);
  }
  
  onDay17(){
    const day="Day 17";
    const message=" Increase bright light exposure during the day.";
    this.showData(day,message);
  }
  
  onDay18(){
    const day="Day 18";
    const message="Reduce blue light exposure in the evening";
    this.showData(day,message);
  }
  
  onDay19(){
    const day="Day 19";
    const message="Try not to take irregular or long daytime naps today.";
    this.showData(day,message);
  }
  
  onDay20(){
    const day="Day 20";
    const message="Don’t drink alcohol today and try to sleep on time.";
    this.showData(day,message);
  }
  
  onDay21(){
    const day="Day 21";
    const message="Set your room temperature cool and try to sleep as scheduled";
    this.showData(day,message);
  }
  
  
  private showData(day:string,message:string){
    this.alertMessage.clear();
    const declutter=this.factoryResolver.resolveComponentFactory(SleepDialogComponent);
    const hostViewContainerRef=this.alertMessage.createComponent(declutter);
    
    hostViewContainerRef.instance.day=day;
    hostViewContainerRef.instance.message=message;
    this.closeSub=hostViewContainerRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.alertMessage.clear();
    });
  }

}
