import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from "react-redux/es/alternate-renderers";

import './App.css';
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import Sign from './pages/Sign/Sign'
import {auth, creaateUserProfileDocument} from "./firebase/firebase";
import {setCurrentUser} from './actions/User'


class App extends React.Component {


    unsubscriveFormAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscriveFormAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await creaateUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            }
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscriveFormAuth();
    }


    render() {
        return (
            <div>
                <div>
                    <Header />
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
const mapDispatchToProps = dispatch => (
    {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
)
export default connect(null, mapDispatchToProps)(App);