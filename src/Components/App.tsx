import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from '../Components/Menu';
import { Header } from './Header';
import { RouterConfigs } from './RouterConfig';

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
                            <RouterConfigs />
                        </div>
                    </BrowserRouter >
                </div>
            </div >
        );
    }
}