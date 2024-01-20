import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import routes from './routes';
import { useDispatch } from 'react-redux';
import { initialCatalog } from './redux/actions/productActions';
import { useCallback, useEffect } from "react";



function App() {
    
    return (
        <Router>
            <div>
                <Navbar />
                <div className="body-container">
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                component={route.component}
                                exact={route.exact}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;