import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralComponent } from './lateral.component';

describe('LateralComponent', () => {
  let component: LateralComponent;
  let fixture: ComponentFixture<LateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateralComponent]
    });
    fixture = TestBed.createComponent(LateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
