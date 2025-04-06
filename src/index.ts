import { KlassikValue } from './types';

/**
 * Combines multiple class names into a single space-separated string.
 * Only processes string arguments and filters out falsy values.
 *
 * @param {...KlassikValue} args - The class names to combine
 * @returns {string} A space-separated string of combined class names
 */
export function kl(...args: KlassikValue[]): string {
  const len = args.length;
  let result = '';

  for (let i = 0; i < len; i++) {
    const arg = args[i];
    if (arg && typeof arg === 'string') {
      if (result) result += ' ';
      result += arg;
    }
  }

  return result;
}

export default kl;
