import { TestBed } from '@angular/core/testing';

import { EmbeddedLabService } from './embedded-lab.service';

describe('EmbeddedLabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbeddedLabService = TestBed.get(EmbeddedLabService);
    expect(service).toBeTruthy();
  });
});
