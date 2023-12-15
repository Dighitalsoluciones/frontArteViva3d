import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasAdmComponent } from './ventas-adm.component';

describe('VentasAdmComponent', () => {
  let component: VentasAdmComponent;
  let fixture: ComponentFixture<VentasAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasAdmComponent]
    });
    fixture = TestBed.createComponent(VentasAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
