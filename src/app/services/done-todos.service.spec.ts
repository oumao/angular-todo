import { TestBed } from '@angular/core/testing';

import { DoneTodosService } from './done-todos.service';

describe('DoneTodosService', () => {
  let service: DoneTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoneTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
