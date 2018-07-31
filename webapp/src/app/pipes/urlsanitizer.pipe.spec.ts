import { URLSanitizerPipe } from './urlsanitizer.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('URLSanitizerPipe', () => {
  let pipe: URLSanitizerPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    pipe = new URLSanitizerPipe(sanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return sanitized url', () => {
    expect(pipe.transform('http://place-hold.it/300')).toBe('http://place-hold.it/300');
  });
});
