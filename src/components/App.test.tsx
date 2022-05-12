import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
    it('App renders', () => {
        // Render App in the document
        render(<App />);
    });
});
