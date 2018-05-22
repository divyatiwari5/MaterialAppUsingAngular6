import { TestBed, inject } from '@angular/core/testing';

import { NewsletterServiceService } from './newsletter-service.service';

describe('NewsletterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterServiceService]
    });
  });

  it('should be created', inject([NewsletterServiceService], (service: NewsletterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
