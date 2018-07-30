import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { ContatoPage } from '../Pages/ContatoPage';
import { Menu } from '../Components/Menu';
import { Header } from './Header';

export class RoutePaths {
    public static home: string = '/';
    public static contato: string = '/contato';

}

export class App extends React.Component {
    handleLoadRoute() {

    }
    render() {
        return (
            <div id="divMaster">
                <Header />
                <div>
                    <BrowserRouter >
                        <div>
                            <Menu />
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