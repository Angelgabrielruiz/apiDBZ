import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
