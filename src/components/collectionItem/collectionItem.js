import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";

import './collectionItem.scss'
import CustomButton from '../custom-button/CustomButton'
import addItem from '../../actions/AddItem'



const CollectionItem = ({item , addItem}) => {
    const { name, price, imageUrl} = item;
    return (
        <div className={'collection-item'}>
            <div
                className={'image'}
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className={'collection-footer'}>
                <span className={`name`}> {name} </span>
                <span className={'price'}> {`$${price}`} </span>
            </div>
            <CustomButton inverted  onClick={() => addItem(item)}> Add to Card </CustomButton>
        </div>
    )
};

const mapDispatchtoProps = dispatch =>(
    {
        addItem: (item) => dispatch(addItem(item))
    }
);



export default connect(null, mapDispatchtoProps)(CollectionItem);