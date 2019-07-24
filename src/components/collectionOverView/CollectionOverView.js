import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";
import {createStructuredSelector} from "reselect";
import {selectColectionsForPreview} from "../../pages/shop/shopSelector";

import CollectionPreview from '../../components/collectionPreview/CollectionPreview'
import './CollectionOverView.scss'



const CollectionOverView = ({collections}) => (
    <div className={'collections-overview'}>
        {
            collections.map(({id, ...otherProps}) => (

                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </div>
);

const mapToStateProps = createStructuredSelector({
    collections: selectColectionsForPreview
});

export default connect(mapToStateProps)(CollectionOverView);
