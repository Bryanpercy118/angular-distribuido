import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRegistroComponent } from './eliminar-registro.component';

describe('EliminarRegistroComponent', () => {
  let component: EliminarRegistroComponent;
  let fixture: ComponentFixture<EliminarRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarRegistroComponent]
    });
    fixture = TestBed.createComponent(EliminarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
