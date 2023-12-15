import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasAdmComponent } from './compras-adm.component';

describe('ComprasAdmComponent', () => {
  let component: ComprasAdmComponent;
  let fixture: ComponentFixture<ComprasAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasAdmComponent]
    });
    fixture = TestBed.createComponent(ComprasAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
