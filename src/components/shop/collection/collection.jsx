import React from 'react'
import './collection.scss';
import {connect} from 'react-redux';
import {selectCollection} from '../../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item';

const Collection = ({collection}) => {

    const {items} = collection;
    return (
        <div className="collection">
            <div className="items">
            {
             items.map(item => (
                 <CollectionItem key={item.id} item={item}/>
             ))
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
