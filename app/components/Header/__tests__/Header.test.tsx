import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Header } from '../Header';

const renderHeader = () => {
  const { container, getByTestId } = render(
    <Header
      icon={<svg data-testid="makaDev-logo" />}
      navigation={<div data-testid="navigation" />}
      rightElementFirst={<div data-testid="rightElementFirst" />}
      rightElementSecond={<div data-testid="rightElementSecond" />}
    />
  );

  return {
    container,
    getByTestId
  };
};

describe('test header component', () => {
  it('should render elements', () => {
    const { getByTestId } = renderHeader();

    const elements = ['makaDev-logo', 'navigation', 'rightElementFirst', 'rightElementSecond'];

    elements.forEach((testId) => {
      expect(getByTestId(testId)).toBeInTheDocument();
    });
  });

  it('should not have violations', async () => {
    const { container } = renderHeader();

    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
