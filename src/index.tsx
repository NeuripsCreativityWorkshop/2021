import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './components/App';

const root = document.getElementById('root');

render(
    <HashRouter >
        <App />
    </HashRouter >,
    root,
);
