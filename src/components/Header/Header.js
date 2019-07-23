import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import './Header.scss'
import {ReactComponent as Logo} from "../../assets/4.4 crown.svg.svg";
import {auth} from "../../firebase/firebase";
import Icon from '../Card-Icon/Icon'
import CartDropdown from "../Cart-Dropdown/cardDropdown";

const Header = ({currenUser, hidden}) => {
    return (
        <div className={'header'}>
            <Link  className={'logo-container'} to={'/'}   >
                <Logo className={'logo'} />
            </Link>
            <div className={'options'}>
                <Link className={'option'} to={'/shop'}>
                    SHOP
                </Link>
                <Link className={'option'} to={'/shop'}>
                    CONTACT
                </Link>
                {
                    currenUser ? <div className={'option'} onClick={() => auth.signOut()}> SIGN OUT</div> : <Link className={'option'} to={'/signin'}>SIGN IN</Link>
                }
                <Icon/>
            </div>
            {
                hidden ? '': <CartDropdown />
            }

        </div>
    )
};

const mapStateToProps = ({user:{currenUser}, cart: {hidden}}) => (
    {
        currenUser,
        hidden
    }
);

export default connect(mapStateToProps)(Header);