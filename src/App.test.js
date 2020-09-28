import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App';

it('renders without crashing', () => {
    render(<App />)
});