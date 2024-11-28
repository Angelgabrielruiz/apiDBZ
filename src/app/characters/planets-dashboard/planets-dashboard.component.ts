import { Component, OnInit } from '@angular/core';
import { Planets } from '../planets'; 
import { CharactersService } from '../characters.service';
@Component({
  selector: 'app-planets-dashboard',
  templateUrl: './planets-dashboard.component.html',
  styleUrls: ['./planets-dashboard.component.css']
})
export class PlanetsDashboardComponent implements OnInit {
  planets: Planets[] = []; 

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getPlanets(); 
  }

  getPlanets(): void {
    this.charactersService.getPlanets().subscribe((response: any) => {
      this.planets = response.items; 
    });
  }
}
