import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubernetesEnginesTableComponent } from './kubernetes-engines-table.component';

describe('KubernetesEnginesTableComponent', () => {
  let component: KubernetesEnginesTableComponent;
  let fixture: ComponentFixture<KubernetesEnginesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubernetesEnginesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KubernetesEnginesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
