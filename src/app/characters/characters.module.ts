import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './characters-dashboard/dashboard.component';
import { CardsComponent } from './cards-characters/cards.component';
import { CharactersTransformationComponent } from './cards-tranformations/characters-transformation.component';
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
  ],
  exports: [
    CharactersTransformationComponent
  ]
})
export class CharactersModule { }
