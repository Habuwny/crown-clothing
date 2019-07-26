import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {firebasestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase";
import UdatedShopData from '../../actions/updatedShopData'
import WithSpinner from '../../components/withSpiner/WithSpiner'
import CollectionOverView from '../../components/collectionOverView/CollectionOverView'
import Category from '../category/category'

const CollectionOverViewWithSpiner = WithSpinner(CollectionOverView);
const CategoryWithSpiner = WithSpinner(Category);



class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFormSnapshot = null;

    componentDidMount() {
        // setTimeout()
        const {updateCollection} = this.props;
        const collectionRef = firebasestore.collection('collections');

        this.unsubscribeFormSnapshot = collectionRef.onSnapshot(async snapshot => {
            const mapCollection = convertCollectionsSnapshotToMap(snapshot);
            updateCollection(mapCollection);
            this.setState({loading: false});
        })

    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;

        return (
                <div className={'shop_page'}>
                    <Route exact
                           path={`${match.path}`}
                           render={(props) => (
                               <CollectionOverViewWithSpiner isLoading={loading} {...props}/>
                           )}

                    />

                    <Route path={`${match.path}/:categoryId`}
                           render={(props) => (
                               <CategoryWithSpiner isLoading={loading} {...props}/>
                               )}
                    />
                </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        updateCollection: mapCollection => dispatch(UdatedShopData(mapCollection))
    }
);

export default connect(null, mapDispatchToProps)(ShopPage);


