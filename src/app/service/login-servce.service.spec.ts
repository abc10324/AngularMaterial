import { TestBed } from '@angular/core/testing';

import { LoginServce } from './login-servce.service';

describe('LoginServce', () => {
  let service: LoginServce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
