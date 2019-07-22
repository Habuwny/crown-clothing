import React from 'react';
import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import Sign from './pages/Sign/Sign'
import {auth, creaateUserProfileDocument} from "./firebase/firebase";
import './App.css';


class App extends React.Component {

    state = {currentUser: null};

    unsubscriveFormAuth = null;

    componentDidMount() {
        this.unsubscriveFormAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await creaateUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            }
            else this.setState({currentUser: userAuth})
        })
    }

    componentWillUnmount() {
        this.unsubscriveFormAuth();
    }


    render() {
        return (
            <div>
                <div>
                    <Header currentUser={this.state.currentUser} />
                    <Switch>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route exact path={'/shop'} component={ShopPage}/>
                        <Route exact path={'/signin'} component={Sign}/>
                    </Switch>

                </div>
            </div>
        );
    }

}

export default App;