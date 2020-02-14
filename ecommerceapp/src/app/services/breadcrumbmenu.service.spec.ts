import { TestBed } from '@angular/core/testing';

import { BreadcrumbmenuService } from './breadcrumbmenu.service';

describe('BreadcrumbmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadcrumbmenuService = TestBed.get(BreadcrumbmenuService);
    expect(service).toBeTruthy();
  });
});
