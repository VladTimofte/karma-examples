// tests/converter.spec.js

import { convert } from '../src/converter.js';

describe('convert', function() {
  it('ar trebui să convertească din USD în EUR', function() {
    const result = convert(100, 'USD', 'EUR');
    expect(result).toBe('85.00');
  });

  it('ar trebui să convertească din RON în GBP', function() {
    const result = convert(600, 'RON', 'GBP');
    expect(result).toBe('96.00');
  });

  it('ar trebui să arunce o eroare pentru suma negativă', function() {
    expect(function() {
      convert();
    }).toThrowError("Suma nu poate fi negativă.");
  });

  it('ar trebui să returneze aceeași sumă când convertim în aceeași monedă', function() {
    const result = convert(100, 'USD', 'USD');
    expect(result).toBe('100.00');
  });
});
