import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { CharactersTransformationComponent } from './characters-transformation/characters-transformation.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    CharactersTransformationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
