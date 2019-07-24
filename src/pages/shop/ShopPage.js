import React from 'react';
import {Route} from 'react-router-dom'

import CollectionOverView from '../../components/collectionOverView/CollectionOverView'
import Category from '../category/category'


const ShopPage = ({match}) => (
            <div className={'shop_page'}>
                <Route exact path={`${match.path}`} component={CollectionOverView}/>
                <Route path={`${match.path}/:categoryId`} component={Category}/>
            </div>
        );


export default ShopPage;