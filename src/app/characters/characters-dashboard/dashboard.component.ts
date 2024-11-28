import { Component } from '@angular/core';
import { Characters } from '../characters';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  characters: Characters[] = []; 

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters(); 
  }

  getCharacters(): void {
    this.charactersService.getCharacters().subscribe((response: any) => {
      this.characters = response.items; 
    });
  }
  
  
}
