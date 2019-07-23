import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";
import {selectCartItems} from '../../redux/cart/cart-Selectors'
import {createStructuredSelector} from "reselect";
import {withRouter} from 'react-router-dom'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../Cart-Item/CartItem'
import toggleHidenCart from '../../actions/Cart'
import './Cart.scss'


const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className={'cart-dropdown'} >
            <div className={'cart-items'} >
                {
                    cartItems.length ?
                    cartItems.map(item => {
                       return <CartItem item={item}/>
                    })
                    : <span className={'empty-cart'}> your cart is emptey</span>
                }
            </div>
            <CustomButton  onClick={() => {
                history.push('/checkout');
                dispatch(toggleHidenCart())
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
};



const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
);

export default withRouter(connect(mapStateToProps)(CartDropdown));