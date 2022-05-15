import { TestBed } from '@angular/core/testing';

import { BotFormService } from './bot-form.service';

describe('BotFormService', () => {
  let service: BotFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
