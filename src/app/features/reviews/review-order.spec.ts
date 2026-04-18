/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { readFileSync } from 'node:fs';

describe('review-order', () => {
  it('keeps newest-first payloads in backend order instead of reversing them again', () => {
    const source = readFileSync('src/app/features/reviews/review-list.component.ts', 'utf8');

    expect(source).not.toContain('.reverse()');
  });
});
