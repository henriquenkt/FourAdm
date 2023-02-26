import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRatComponent } from './consulta-rat.component';

describe('ConsultaRatComponent', () => {
  let component: ConsultaRatComponent;
  let fixture: ComponentFixture<ConsultaRatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaRatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaRatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
