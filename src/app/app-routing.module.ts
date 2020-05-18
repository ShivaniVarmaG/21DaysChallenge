import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CreditComponent } from './modules/credit/credit.component';
import { GratitudeComponent } from './cards/gratitude/gratitude.component';
import { DeclutterComponent } from './cards/declutter/declutter.component';
import { HappinessComponent } from './cards/happiness/happiness.component';
import { ProductivityComponent } from './cards/productivity/productivity.component';
import { SleepComponent } from './cards/sleep/sleep.component';
import { SocialComponent } from './cards/social/social.component';
import { StudyComponent } from './cards/study/study.component';
import { WorkoutComponent } from './cards/workout/workout.component';
import { DisplayComponent } from './modules/display/display.component';


const routes: Routes = [{
  path:'',
  component:DashboardComponent,
  children:[{
    path:'home',
    component:HomeComponent,
    children:[{
      path:'display',
      component:DisplayComponent
    }]
  },
 {
  path:'contact',
  component:ContactComponent
 },
 {
  path:'credits',
  component:CreditComponent  
 },
 {
  path:'gratitude',
  component: GratitudeComponent
},
{
  path:'declutter',
  component: DeclutterComponent
},
{
  path:'happiness',
  component: HappinessComponent
},
{
  path: 'productivity',
  component: ProductivityComponent
},
{
  path:'sleep',
  component: SleepComponent
},
{
  path:'social',
  component: SocialComponent
},
{
  path:'study',
  component: StudyComponent
},
{
  path:'workout',
  component: WorkoutComponent
}]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
