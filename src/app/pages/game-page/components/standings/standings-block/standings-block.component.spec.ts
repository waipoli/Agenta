import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsBlockComponent } from './standings-block.component';

describe('StandingsBlockComponent', () => {
  let component: StandingsBlockComponent;
  let fixture: ComponentFixture<StandingsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
