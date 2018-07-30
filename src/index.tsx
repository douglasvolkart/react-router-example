import * as React from 'react';
import { App } from './Components/App';
import './Styles/app.css'; 
import { createBrowserHistory } from 'history';

import { render } from 'react-dom';

export const history = createBrowserHistory();

render(
    <App />,
    document.getElementById('root') as HTMLElement
);