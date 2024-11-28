import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersTransformationComponent } from './characters-transformation.component';

describe('CharactersTransformationComponent', () => {
  let component: CharactersTransformationComponent;
  let fixture: ComponentFixture<CharactersTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersTransformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
