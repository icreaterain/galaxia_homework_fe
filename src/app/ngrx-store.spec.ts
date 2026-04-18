/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { readFileSync } from 'node:fs';

describe('ngrx-store', () => {
  it('declares NgRx store dependencies for the catalog and cart migration', () => {
    const packageJson = readFileSync('package.json', 'utf8');

    expect(packageJson).toContain('@ngrx/store');
    expect(packageJson).toContain('@ngrx/effects');
  });
});
