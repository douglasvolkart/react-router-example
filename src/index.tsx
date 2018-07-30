import * as React from 'react';
import { Routes } from './Components/Routes';
import './Styles/app.css'; 
import { createBrowserHistory } from 'history';

import { render } from 'react-dom';

export const history = createBrowserHistory();

render(
    <Routes />,
    document.getElementById('root') as HTMLElement
);