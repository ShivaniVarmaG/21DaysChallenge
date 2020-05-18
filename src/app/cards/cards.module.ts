import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GratitudeComponent } from './gratitude/gratitude.component';
import { HappinessComponent } from './happiness/happiness.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { SleepComponent } from './sleep/sleep.component';
import { WorkoutComponent } from './workout/workout.component';
import { SocialComponent } from './social/social.component';
import { StudyComponent } from './study/study.component';
import { DeclutterComponent } from './declutter/declutter.component';
import { RouterModule } from '@angular/router';
import { DeclutterDialogComponent } from './dialog/declutter-dialog/declutter-dialog.component';
import { GratitudeDialogComponent } from './dialog/gratitude-dialog/gratitude-dialog.component';
import { HappinessDialogComponent } from './dialog/happiness-dialog/happiness-dialog.component';
import { ProductivityDialogComponent } from './dialog/productivity-dialog/productivity-dialog.component';
import { SleepDialogComponent } from './dialog/sleep-dialog/sleep-dialog.component';
import { SocialDialogComponent } from './dialog/social-dialog/social-dialog.component';
import { StudyDialogComponent } from './dialog/study-dialog/study-dialog.component';
import { WorkoutDialogComponent } from './dialog/workout-dialog/workout-dialog.component';





@NgModule({
  declarations: [
    GratitudeComponent,
    HappinessComponent,
    ProductivityComponent,
    SleepComponent,
    WorkoutComponent,
    SocialComponent,
    StudyComponent,
    DeclutterComponent,
    DeclutterDialogComponent,
    GratitudeDialogComponent,
    HappinessDialogComponent,
    ProductivityDialogComponent,
    SleepDialogComponent,
    SocialDialogComponent,
    StudyDialogComponent,
    WorkoutDialogComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  entryComponents:[
    DeclutterDialogComponent,
    GratitudeDialogComponent,
    HappinessDialogComponent,
    ProductivityDialogComponent,
    SleepDialogComponent,
    SocialDialogComponent,
    StudyDialogComponent,
    WorkoutDialogComponent
  ]
})
export class CardsModule { }
