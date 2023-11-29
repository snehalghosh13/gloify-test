import { TestBed } from '@angular/core/testing';

import { HttpHandlesService } from './http-handles.service';

describe('HttpHandlesService', () => {
  let service: HttpHandlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHandlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
