import { TestBed } from '@angular/core/testing';

import { NgxWaitingService } from './ngx-waiting.service';

describe('NgxWaitingService', () => {
  let service: NgxWaitingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWaitingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
