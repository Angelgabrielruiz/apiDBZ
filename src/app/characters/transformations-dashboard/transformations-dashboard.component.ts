import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Transformations } from '../transformations';

@Component({
  selector: 'app-transformations-dashboard',
  templateUrl: './transformations-dashboard.component.html',
  styleUrls: ['./transformations-dashboard.component.css']
})
export class TransformationsDashboardComponent implements OnInit {
  transformations: Transformations[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getTransformations().subscribe((data) => {
      this.transformations = data;
    });
  }
}
