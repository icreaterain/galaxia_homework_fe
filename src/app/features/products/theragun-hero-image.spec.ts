/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { readFileSync } from 'node:fs';

describe('theragun-hero-image', () => {
  it('keeps the Theragun hero image on the shipped asset path', () => {
    const source = readFileSync('src/app/features/products/product-detail.component.ts', 'utf8');

    expect(source).toContain('/assets/products/theragun-prime.jpg');
  });
});
