import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaExcelComponent } from './alerta-excel.component';

describe('AlertaExcelComponent', () => {
  let component: AlertaExcelComponent;
  let fixture: ComponentFixture<AlertaExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertaExcelComponent]
    });
    fixture = TestBed.createComponent(AlertaExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
