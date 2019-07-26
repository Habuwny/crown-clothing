import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";

import {selectCollection} from "../shop/shopSelector";
import CollectionItem from '../../components/collectionItem/collectionItem'
import './category.scss'


const Category = ({collection}) => {
    const {title, items} = collection;
    console.log(collection);
    return (
        <div className={'collection-page'}>
            <h2 className={'title'}>{title}</h2>
            <div className={'items'}>
                {
                    items.map(item => <CollectionItem  key={item.id} item={item}/>)
                }
            </div>

        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
});


export default connect(mapStateToProps)(Category);