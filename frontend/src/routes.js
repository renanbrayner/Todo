import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';

import Login from './pages/Login';
import Register from './pages/Register';
import Todos from './pages/Todos';

function Routes() {
    return(
        <BrowserRouter>
        <>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/todos' exact component={Todos}/>
            </Switch>
            <GlobalStyle />
        </>
        </BrowserRouter>
    );
}

export default Routes;