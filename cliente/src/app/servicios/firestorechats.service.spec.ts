import { TestBed } from '@angular/core/testing';

import { FirestorechatsService } from './firestorechats.service';

describe('FirestorechatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestorechatsService = TestBed.get(FirestorechatsService);
    expect(service).toBeTruthy();
  });
});
