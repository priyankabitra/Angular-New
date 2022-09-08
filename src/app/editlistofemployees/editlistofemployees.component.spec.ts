import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlistofemployeesComponent } from './editlistofemployees.component';

describe('EditlistofemployeesComponent', () => {
  let component: EditlistofemployeesComponent;
  let fixture: ComponentFixture<EditlistofemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlistofemployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditlistofemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
