import { resolvedComponent } from '@/setupTests';
import { render, screen } from '@testing-library/react';

import { Footer } from '../Footer';

describe('test Footer component', () => {
  it('should render copyright text', async () => {
    const FooterResolved = await resolvedComponent(Footer, {
      language: 'pl',
      country: 'PL'
    });
    render(<FooterResolved />);

    expect(screen.getByText('Copyright Ⓒ 2024 makaDev Patryk Makarewicz, ver. 1.1')).toBeInTheDocument();
  });
});
