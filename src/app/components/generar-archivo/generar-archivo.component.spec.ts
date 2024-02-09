import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarArchivoComponent } from './generar-archivo.component';

describe('GenerarArchivoComponent', () => {
  let component: GenerarArchivoComponent;
  let fixture: ComponentFixture<GenerarArchivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarArchivoComponent]
    });
    fixture = TestBed.createComponent(GenerarArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
