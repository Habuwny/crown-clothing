import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";
import {selectCartItemsCount} from '../../redux/cart/cart-Selectors'
import {createStructuredSelector} from "reselect";


import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg.svg'
import './Icon.scss'
import toggleHidenCart from "../../actions/Cart";


const Icon = ({toggleHidenCart, itemCount}) => {
    return (
        <div className={'cart-icon'} onClick={toggleHidenCart}>
            <ShopingIcon className={'cart-icon'} />
            <span className={'item-count'}> {itemCount} </span>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
    toggleHidenCart: () => dispatch(toggleHidenCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);