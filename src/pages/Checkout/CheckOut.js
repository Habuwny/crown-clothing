import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart-Selectors";
import {selectCartTotal} from '../../redux/cart/cart-Selectors'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

import './CheckOut.scss'
import CarttItem from "../../components/Cart-Item/CartItem";



const CheckOut = ({cartItems, total}) => {
    return (
        <div className={'checkout-page'}>
            <div className={'checkout-header'}>
                <div className={'header-block'}>
                    <span>Product</span>
                </div>
                <div className={'header-block'}>
                    <span>Description</span>
                </div>
                <div className={'header-block'}>
                    <span>Quantity</span>
                </div>
                <div className={'header-block'}>
                    <span>Price</span>
                </div>
                <div className={'header-block'}>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))}

            <div className={'total'}>
                <span> TOTAL: ${total} </span>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        total: selectCartTotal
    }
)

export default connect(mapStateToProps)(CheckOut);