import { TestBed } from '@angular/core/testing';

import { ServicePanneauxService } from './service-panneaux.service';

describe('ServicePanneauxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePanneauxService = TestBed.get(ServicePanneauxService);
    expect(service).toBeTruthy();
  });
});
