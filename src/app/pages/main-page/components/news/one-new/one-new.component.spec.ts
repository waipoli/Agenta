import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneNewComponent } from './one-new.component';

describe('OneNewComponent', () => {
  let component: OneNewComponent;
  let fixture: ComponentFixture<OneNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
