import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorNombre } from './por-nombre';

describe('PorNombre', () => {
  let component: PorNombre;
  let fixture: ComponentFixture<PorNombre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorNombre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorNombre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
