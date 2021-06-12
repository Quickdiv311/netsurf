import React from 'react';
import './shoppage.scss';
import ShopHeader from '../../components/header/shop-header/shop-header';
import Collection from '../../components/shop/collection/collection';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {firestore, downloadCollectionsData} from '../../firebase/firebase';
import {updateCollection} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component{

    unSubSnapshot = null;

    componentDidMount()
    {   const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        this.unSubSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsObject = downloadCollectionsData(snapshot);
            console.log(collectionsObject);
            updateCollections(collectionsObject); 
        })
    }

    render()
    { const {match} = this.props;
        return(
            <div className="shop">
                <ShopHeader/>
                <Route path={`${match.path}/:collectionId`} component={Collection}/>        
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections:  collections => dispatch(updateCollection(collections))
})

export default connect(null,mapDispatchToProps)(ShopPage);