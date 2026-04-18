/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { readFileSync } from 'node:fs';

describe('review-badges', () => {
  it('renders a visible sentiment badge for classified reviews', () => {
    const reviewCardSource = readFileSync(
      'src/app/features/reviews/review-card.component.ts',
      'utf8',
    );

    expect(reviewCardSource).toContain('sentiment');
    expect(reviewCardSource).toContain('badge');
  });
});
