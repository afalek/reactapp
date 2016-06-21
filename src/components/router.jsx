import React from 'react';
import { Router, Route } from 'react-router';
import App from '../containers/App';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Todolist from '../pages/todo';
import {changePageTitle} from '../actions/navigation';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleEnter(title) {
        this.props.dispatch(changePageTitle(title));
    }

    render() {
        return (
            <Router history={this.props.history}>
              <Route path="/" component={App}>
                <Route onEnter={()=>this.handleEnter('Update daty')} path="page1" component={Page1}/>
                <Route onEnter={()=>this.handleEnter('Zmiana koloru')} path="page2" component={Page2}/>
                <Route onEnter={()=>this.handleEnter('Lista Todo')} path="todolist" component={Todolist}/>
              </Route>
            </Router>
        );
    }
}

export default AppRouter;
