import React from 'react';
import './shoppage.scss';
import { createStructuredSelector } from 'reselect';
import { selectFetching } from '../../redux/shop/shop.selectors';
import { updateCollectionStartAsync} from '../../redux/shop/shop.actions'
import ShopHeader from '../../components/header/shop-header/shop-header';
import Collection from '../../components/shop/collection/collection';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';

const CollectionWithSpinner = Spinner(Collection);

class ShopPage extends React.Component{

    componentDidMount(){
        const {updateCollectionStartAsync} = this.props;
        updateCollectionStartAsync();
    }

    render()
    { const {match,updating} = this.props;
        return(
            <div className="shop">
                <ShopHeader/>
                <Route path={`${match.path}/:collectionId`} render={otherProps => (<CollectionWithSpinner isLoading={updating} {...otherProps}/>)}/>        
            </div>
        )
    }
} 

const mapStateToProps = createStructuredSelector({
    updating: selectFetching
})

const mapDispatchToProps = dispatch => ({
    updateCollectionStartAsync:  collections => dispatch(updateCollectionStartAsync(collections))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);