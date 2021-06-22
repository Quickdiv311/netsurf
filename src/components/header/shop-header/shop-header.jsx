import React from 'react';
import { withRouter } from 'react-router-dom';
import './shop-header.scss';

const ShopHeader = ({history,match}) => {
    return (
        <div className="shop-header">
            <div className="option" onClick={() => history.push(`${match.path}/naturamore`)}>
                Naturamore
            </div>
            <div className="option" onClick={() => history.push(`${match.path}/herbsandmore`)}>
                HerbsAndMore
            </div>
            </div>       
    )
}

export default withRouter(ShopHeader);
