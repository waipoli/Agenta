import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBotsComponent } from './my-bots.component';

describe('MySubmissionComponent', () => {
  let component: MyBotsComponent;
  let fixture: ComponentFixture<MyBotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
