import { TestBed } from '@angular/core/testing';

import { ProductsServiceAnnonceService } from './products-service-annonce.service';

describe('ProductsServiceAnnonceService', () => {
  let service: ProductsServiceAnnonceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiceAnnonceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
