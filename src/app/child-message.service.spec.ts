import { TestBed } from '@angular/core/testing';

import { ChildMessageService } from './child-message.service';

describe('ChildMessageService', () => {
  let service: ChildMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
