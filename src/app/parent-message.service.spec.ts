import { TestBed } from '@angular/core/testing';

import { ParentMessageService } from './parent-message.service';

describe('ParentMessageService', () => {
  let service: ParentMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
