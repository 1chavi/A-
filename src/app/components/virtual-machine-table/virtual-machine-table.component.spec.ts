import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMachineTableComponent } from './virtual-machine-table.component';

describe('VirtualMachineTableComponent', () => {
  let component: VirtualMachineTableComponent;
  let fixture: ComponentFixture<VirtualMachineTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualMachineTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualMachineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
