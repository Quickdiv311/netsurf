import React from 'react';
import './collection-item.scss';

const CollectionItem = ({item}) => {
    const {imageUrl} = item;
    return (
        <div className="collectionItem">
       <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}/>
        </div>
    )
}

export default CollectionItem;
