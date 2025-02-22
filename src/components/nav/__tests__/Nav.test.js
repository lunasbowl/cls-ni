import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Nav';

describe('Nav tests', () => {
  it('should render Nav component', () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
  });
});
