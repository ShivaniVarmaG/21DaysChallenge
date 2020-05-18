import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../modules/home/home.component';
import { ContactComponent } from '../modules/contact/contact.component';
import { CreditComponent } from '../modules/credit/credit.component';
import { RouterModule } from '@angular/router';
import { CardsModule } from '../cards/cards.module';
import { DisplayComponent } from '../modules/display/display.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ContactComponent,
    CreditComponent,
    DisplayComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardsModule,
    RouterModule
  ]
})
export class DashboardModule { }
