import { TestBed } from '@angular/core/testing';

import { Apijugadores } from './apijugadores';

describe('Apijugadores', () => {
  let service: Apijugadores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apijugadores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
