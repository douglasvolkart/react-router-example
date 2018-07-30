import * as React from 'react';
import { Link } from 'react-router-dom';
import { InputSearch } from './InputSearch';

export class Menu extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contato">contato</Link>
                </li>
                <li>
                    <InputSearch />
                </li>
            </ul>
        );
    }
}