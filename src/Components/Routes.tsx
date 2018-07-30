import * as React from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { ContatoPage } from '../Pages/ContatoPage';
import { InputSearch } from '../Components/InputSearch';

export class RoutePaths {
    public static home: string = '/';
    public static contato: string = '/contato';

}

export class Routes extends React.Component {
    handleLoadRoute() {

    }
    render() {
        return (
            <div id="divMaster">
                <header className="header">
                    <p>Meu header html</p>
                </header>
                <div>
                    <BrowserRouter >
                        <div>
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
                            <Switch>
                                <Route exact={true} path={RoutePaths.home} component={HomePage} />
                                <Route path={RoutePaths.contato} component={ContatoPage} />
                            </Switch>
                        </div>
                    </BrowserRouter >
                </div>
            </div >
        );
    }
}