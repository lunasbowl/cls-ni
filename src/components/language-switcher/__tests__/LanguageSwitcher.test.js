import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => {
  const changeLanguage = jest.fn();
  return {
    useTranslation: () => ({
      i18n: {
        changeLanguage,
      },
    }),
  };
});

describe('LanguageSwitcher tests', () => {
  it('should render language buttons', () => {
    render(<LanguageSwitcher />);

    expect(screen.getByText('简体中文')).toBeInTheDocument();
    expect(screen.getByText('繁體中文')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('should change language to simplified Chinese when 简体中文 button is clicked', () => {
    const { i18n } = useTranslation();
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByText('简体中文'));

    expect(i18n.changeLanguage).toHaveBeenCalledWith('zh');
  });

  it('should change language to traditional Chinese when 繁體中文 button is clicked', () => {
    const { i18n } = useTranslation();
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByText('繁體中文'));

    expect(i18n.changeLanguage).toHaveBeenCalledWith('hk');
  });

  it('should change language to traditional Chinese when English button is clicked', () => {
    const { i18n } = useTranslation();
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByText('English'));

    expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
  });
});
