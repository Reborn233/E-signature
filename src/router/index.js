import React, {Component} from 'react';
import {HashRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import asyncComponent from '../components/AsyncComponent';

const Home = asyncComponent(() => import('../pages/Home'));
const Agreement = asyncComponent(() => import('../pages/Agreement'));
const Face = asyncComponent(() => import('../pages/Face'));
const Signature = asyncComponent(() => import('../pages/Signature'));


class RRoute extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact strict from='/' to='/home'/>
                    <Route path='/home' component={Home}/>
                    <Route path='/Agreement' component={Agreement}/>
                    <Route path='/face' component={Face}/>
                    <Route path='/signature' component={Signature}/>
                    <Route render={() => <h2 className='container'>页面走丢啦!</h2>}/>
                </Switch>
            </Router>
        );
    }
}

export default RRoute;
