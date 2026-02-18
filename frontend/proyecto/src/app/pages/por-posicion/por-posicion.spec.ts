import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorPosicion } from './por-posicion';

describe('PorPosicion', () => {
  let component: PorPosicion;
  let fixture: ComponentFixture<PorPosicion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorPosicion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorPosicion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
