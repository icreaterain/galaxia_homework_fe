/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
import { readFileSync } from 'node:fs';

describe('products-brand', () => {
  it('exposes brand in the generated product contract and product list UI', () => {
    const graphqlSource = readFileSync('src/generated/graphql.ts', 'utf8');
    const productListSource = readFileSync(
      'src/app/features/products/product-list.component.ts',
      'utf8',
    );

    expect(graphqlSource).toContain('brand');
    expect(productListSource).toContain('brand');
  });
});
