import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
interface InputSearchState {
    route?: string;
}
class InputSearch extends React.Component<RouteComponentProps<any>, InputSearchState> {
    handleButtonClick() {
        this.props.history.push('/render1');
    }
    handleChange(ev: any) {
        this.setState({ route: ev.target.value });
    }
    handleKeyPress = (ev: any) => {
        if (ev.key === 'Enter') {
            this.props.history.push('/' + this.state.route);
        }
    }
    render() {
        return (
            <input type="text" onChange={(ev: any) => { this.handleChange(ev); }} onKeyPress={this.handleKeyPress} />
        );
    }
}
const Search = withRouter(InputSearch);
export {
    Search as InputSearch
};