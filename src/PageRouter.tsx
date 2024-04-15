import React from 'react';
import { Router, RouteProps, Route, Switch } from 'react-router-dom';

//pages:
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Partners from "./pages/Partners";
import Comunity from "./pages/Comunity";
import Contact from "./pages/Contact";
// layout:
import Layout from './Layout';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

interface StyledRouteProps extends Omit<RouteProps, "component"> {
    component: React.ElementType;
}

const StyledRoute: React.FC<StyledRouteProps> = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (<Layout><Component {...props} /></Layout>)} />
);

class PageRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <StyledRoute exact path="/coding-allies-site" component={Home} />
                    <StyledRoute path="/coding-allies-site/about" component={About} />
                    <StyledRoute path="/coding-allies-site/events" component={Events} />
                    <StyledRoute path="/coding-allies-site/companies" component={Partners} />
                    <StyledRoute path="/coding-allies-site/comunity" component={Comunity} />
                    <StyledRoute path="/coding-allies-site/contact" component={Contact} />
                </Switch>
            </Router>
        );
    }
}

export default PageRouter;
