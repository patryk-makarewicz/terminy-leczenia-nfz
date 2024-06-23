import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import { cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn()
});

//@ts-ignore
export const resolvedComponent = async (Component, props) => {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
};
