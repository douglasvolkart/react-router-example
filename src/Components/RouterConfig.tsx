import * as React from 'react';
import { Switch, Route } from 'react-router';
import { ContatoPage } from '../Pages/ContatoPage';
import { HomePage } from '../Pages/HomePage';
export class RoutePaths {
    public static home: string = '/';
    public static contato: string = '/contato';

}
export class RouterConfigs extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path={RoutePaths.home} component={HomePage} />
                <Route path={RoutePaths.contato} component={ContatoPage} />
            </Switch>
        );
    }
}