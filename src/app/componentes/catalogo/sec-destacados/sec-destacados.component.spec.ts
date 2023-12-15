import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecDestacadosComponent } from './sec-destacados.component';

describe('SecDestacadosComponent', () => {
  let component: SecDestacadosComponent;
  let fixture: ComponentFixture<SecDestacadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecDestacadosComponent]
    });
    fixture = TestBed.createComponent(SecDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
