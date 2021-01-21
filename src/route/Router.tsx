import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Games from '../pages/Games';
import GamesMap from '../pages/GamesMap';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import Auth from '../pages/Auth';
import { AppContext } from '../state';
import { stat } from 'fs';



const Router: React.FC = () => {
    const { state } = useContext(AppContext);

    let checkLogIn = state.username ? true : false;
    return (
        <>
            <Route path="/games" component={Games} exact={true} />
            <Route path="/gamesmap" component={GamesMap} exact={true} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/" render={() => <Redirect to="/games" />} exact={true} />
        </>
    )
}

export default Router