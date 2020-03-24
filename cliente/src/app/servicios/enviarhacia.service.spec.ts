import { TestBed } from '@angular/core/testing';

import { EnviarhaciaService } from './enviarhacia.service';

describe('EnviarhaciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviarhaciaService = TestBed.get(EnviarhaciaService);
    expect(service).toBeTruthy();
  });
});
