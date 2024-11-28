import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationsDashboardComponent } from './transformations-dashboard.component';

describe('TransformationsDashboardComponent', () => {
  let component: TransformationsDashboardComponent;
  let fixture: ComponentFixture<TransformationsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransformationsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
