/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { readFileSync } from 'node:fs';

describe('review-sort-contract', () => {
  it('preserves backend highest-rating order instead of mutating it in the client', () => {
    const source = readFileSync('src/app/features/reviews/review-list.component.ts', 'utf8');

    expect(source).not.toContain('return [...reviews].reverse()');
  });
});
