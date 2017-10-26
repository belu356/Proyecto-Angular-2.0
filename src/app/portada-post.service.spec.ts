import { TestBed, inject } from '@angular/core/testing';

import { PortadaPostService } from './portada-post.service';

describe('PortadaPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortadaPostService]
    });
  });

  it('should be created', inject([PortadaPostService], (service: PortadaPostService) => {
    expect(service).toBeTruthy();
  }));
});
