import kl, { kl as namedKl } from '../src';

/* eslint-disable no-constant-binary-expression */
describe('Klassik', () => {
  describe('exports', () => {
    test('exports default function and named function', () => {
      expect(typeof kl).toBe('function');
      expect(typeof namedKl).toBe('function');
      expect(kl).toBe(namedKl);

      expect(typeof kl()).toBe('string');
      expect(typeof namedKl()).toBe('string');
    });
  });

  describe('strings', () => {
    test('handles single strings', () => {
      expect(kl('')).toBe('');
      expect(kl('foo')).toBe('foo');
      expect(kl(true && 'foo')).toBe('foo');
      expect(kl(false && 'foo')).toBe('');
    });

    test('handles multiple strings', () => {
      expect(kl('')).toBe('');
      expect(kl('foo', 'bar')).toBe('foo bar');
      expect(kl(true && 'foo', false && 'bar', 'baz')).toBe('foo baz');
      expect(kl(false && 'foo', 'bar', 'baz', '')).toBe('bar baz');
    });
  });

  describe('empty values', () => {
    test('treats empty values as empty strings', () => {
      expect(kl('')).toBe('');
      expect(kl(undefined)).toBe('');
      expect(kl(null)).toBe('');
      expect(kl(0)).toBe('');
    });
  });

  describe('non-strings', () => {
    test('ignores numbers', () => {
      expect(kl(1)).toBe('');
      expect(kl(1, 2)).toBe('');
      expect(kl(Infinity)).toBe('');
      expect(kl(NaN)).toBe('');
      expect(kl(0)).toBe('');
    });

    test('ignores objects', () => {
      expect(kl({})).toBe('');
      expect(kl(null)).toBe('');
      expect(kl({ a: 1 })).toBe('');
      expect(kl({ a: 1 }, { b: 2 })).toBe('');
    });

    test('ignores arrays', () => {
      expect(kl([])).toBe('');
      expect(kl(['foo'])).toBe('');
      expect(kl(['foo', 'bar'])).toBe('');
    });
  });
});
