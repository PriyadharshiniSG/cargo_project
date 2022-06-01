import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversEntryComponent } from './drivers-entry.component';

describe('DriversEntryComponent', () => {
  let component: DriversEntryComponent;
  let fixture: ComponentFixture<DriversEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
