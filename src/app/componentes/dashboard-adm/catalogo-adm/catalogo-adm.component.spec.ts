import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAdmComponent } from './catalogo-adm.component';

describe('CatalogoAdmComponent', () => {
  let component: CatalogoAdmComponent;
  let fixture: ComponentFixture<CatalogoAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogoAdmComponent]
    });
    fixture = TestBed.createComponent(CatalogoAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
