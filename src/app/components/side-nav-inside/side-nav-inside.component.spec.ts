import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavInsideComponent } from './side-nav-inside.component';

describe('SideNavInsideComponent', () => {
  let component: SideNavInsideComponent;
  let fixture: ComponentFixture<SideNavInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavInsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
