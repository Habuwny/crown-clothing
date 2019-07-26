import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import './Header.scss'
import {ReactComponent as Logo} from "../../assets/4.4 crown.svg.svg";
import {auth} from "../../firebase/firebase";
import Icon from '../Card-Icon/Icon'
import CartDropdown from "../Cart-Dropdown/cardDropdown";
import {selectCurrentUser} from "../../redux/user/user-selectors";
import {selectCartHidden} from "../../redux/cart/cart-Selectors";
import {HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv} from './Header.styles'

const Header = ({currenUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to={'/'}>
                <Logo className={'logo'}/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to={'/shop'}>
                    SHOP
                </OptionLink>
                <OptionLink to={'/shop'}>
                    CONTACT
                </OptionLink>
                {
                    currenUser ? <OptionDiv onClick={() => auth.signOut()}> SIGN OUT</OptionDiv> :
                        <OptionLink to={'/signin'}>SIGN IN</OptionLink>
                }
                <Icon/>
            </OptionsContainer>
            {
                hidden ? '' : <CartDropdown/>
            }

        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currenUser: selectCurrentUser,
        hidden: selectCartHidden
    });
export default connect(mapStateToProps)(Header);