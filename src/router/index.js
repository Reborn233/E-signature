import React, {Component} from 'react';
import {HashRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import routeMap from './routeMap';

const routes = () => {
    return routeMap.map((item, index) => {
        return (
            <Route key={index} path={item.path} render={() => {
                document.title = item.name;
                return <item.component/>
            }}/>
        )
    })
};


class RRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact strict from='/' to='/home'/>
                    {routes()}
                    <Route render={() => <h2 className='container'>页面走丢啦!</h2>}/>
                </Switch>
            </Router>
        );
    }
}

export default RRoute;
