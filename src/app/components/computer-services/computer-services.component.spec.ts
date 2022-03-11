import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerServicesComponent } from './computer-services.component';

describe('ComputerServicesComponent', () => {
  let component: ComputerServicesComponent;
  let fixture: ComponentFixture<ComputerServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
