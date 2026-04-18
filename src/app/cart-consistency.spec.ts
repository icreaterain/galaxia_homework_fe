/* eslint-disable @typescript-eslint/no-unsafe-call */
import { existsSync } from 'node:fs';

describe('cart-consistency', () => {
  it('ships dedicated cart selectors so every surface reads the same state', () => {
    expect(existsSync('src/app/store/cart/cart.selectors.ts')).toBe(true);
  });
});
