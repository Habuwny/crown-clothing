import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from "react-redux/es/alternate-renderers";
import {createStructuredSelector} from "reselect";
import CheckOut from './pages/Checkout/CheckOut'

import './App.css';
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import Sign from './pages/Sign/Sign'
import {auth, creaateUserProfileDocument} from "./firebase/firebase";
import {setCurrentUser} from './actions/User'
import {selectCurrentUser} from "./redux/user/user-selectors";


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
                    <Header/>
                    <Switch>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route  path={'/shop'} component={ShopPage}/>
                        <Route exact path={'/signin'}
                               render={() => this.props.currentUser ? (<Redirect to={'/'}/>) : (<Sign/>)}/>
                        <Route exact to={'/checkout'} component={CheckOut}/>
                    </Switch>

                </div>
            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => (
    {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(App);