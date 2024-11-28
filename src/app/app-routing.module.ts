import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './characters/characters-dashboard/dashboard.component';
import { PlanetsDashboardComponent } from './characters/planets-dashboard/planets-dashboard.component';

const routes: Routes = [
  {path: 'characters', component: DashboardComponent},
  {path: '', component: DashboardComponent},
  {path: 'planets',component: PlanetsDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
