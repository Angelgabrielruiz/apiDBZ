import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { CharactersTransformationComponent } from './characters-transformation/characters-transformation.component';
import { TransformationsDashboardComponent } from './transformations-dashboard/transformations-dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    CharactersTransformationComponent,
    TransformationsDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
