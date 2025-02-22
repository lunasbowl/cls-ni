import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderTop from '../HeaderTop';

describe('HeaderTop tests', () => {
  it('should render HeaderTop component and include LanguageSwitcher', () => {
    render(<HeaderTop />);
    const HeaderTopDiv = screen.getByRole('banner');
    expect(HeaderTopDiv).toBeInTheDocument();
    expect(screen.getByText('简体中文')).toBeInTheDocument();
    expect(screen.getByText('繁體中文')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });
});
