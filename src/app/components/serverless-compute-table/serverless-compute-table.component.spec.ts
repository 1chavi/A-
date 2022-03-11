import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerlessComputeTableComponent } from './serverless-compute-table.component';

describe('ServerlessComputeTableComponent', () => {
  let component: ServerlessComputeTableComponent;
  let fixture: ComponentFixture<ServerlessComputeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerlessComputeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerlessComputeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
