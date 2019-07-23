import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";


import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg.svg'
import './Icon.scss'
import toggleHidenCart from "../../actions/Cart";


const Icon = ({toggleHidenCart}) => {
    return (
        <div className={'cart-icon'} onClick={toggleHidenCart}>
            <ShopingIcon className={'cart-icon'} />
            <span className={'item-count'}> {0} </span>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    toggleHidenCart: () => dispatch(toggleHidenCart())
});

export default connect(null, mapDispatchToProps)(Icon);