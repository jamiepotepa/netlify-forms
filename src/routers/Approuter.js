import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Index from '../components/Index';
import Contact from '../components/Contact';
import Success from '../components/Success';

const AppRouter = (props) => {
   
    return (
        <Router basename=''>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/contact" component={Contact} />
                <Route path="/success" component={Success} />
            </Switch>
        </Router>
    );

};

export default AppRouter;