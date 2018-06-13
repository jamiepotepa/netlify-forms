import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Index from '../components/Index';
import Contact from '../components/Contact';

const AppRouter = (props) => {
   
    return (
        <Router basename=''>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );

};

export default AppRouter;