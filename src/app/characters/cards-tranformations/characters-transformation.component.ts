import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Transformations } from '../transformations';

@Component({
  selector: 'app-characters-transformation',
  templateUrl: './characters-transformation.component.html',
  styleUrls: ['./characters-transformation.component.css']
})
export class CharactersTransformationComponent implements OnInit {
  transformations: Transformations[] = [];
  currentTransformationIndex: number = 0;  

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    
    this.charactersService.getTransformations().subscribe((data) => {
      this.transformations = data;
      this.loadTransformation();
    });
  }


  loadTransformation(): void {
    
  }

  
  prevTransformation(): void {
    if (this.currentTransformationIndex > 0) {
      this.currentTransformationIndex--;
      this.loadTransformation(); 
    }
  }

  
  nextTransformation(): void {
    if (this.currentTransformationIndex < this.transformations.length - 1) {
      this.currentTransformationIndex++;
      this.loadTransformation(); 
    }
  }
}
