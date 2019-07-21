import React from 'react';
import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import './App.css';



const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route exact path={'/shop'} component={ShopPage}/>
        </Switch>

    </div>
  );
}

export default App;
