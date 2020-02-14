import { TestBed } from '@angular/core/testing';

import { BreadcrumbMenuService } from './breadcrumb-menu-service.service';

describe('BreadcrumbMenuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadcrumbMenuService = TestBed.get(BreadcrumbMenuService);
    expect(service).toBeTruthy();
  });
});
