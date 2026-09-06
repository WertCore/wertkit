import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Unmount between tests. Without it, every rendered tree stays in the document
// and a `getByRole` that should be unambiguous starts matching the previous
// test's leftovers — which reads as a component bug and is not one.
afterEach(cleanup);
