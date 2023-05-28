import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroSuperiorComponent } from './centro-superior.component';

describe('CentroSuperiorComponent', () => {
  let component: CentroSuperiorComponent;
  let fixture: ComponentFixture<CentroSuperiorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroSuperiorComponent]
    });
    fixture = TestBed.createComponent(CentroSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
