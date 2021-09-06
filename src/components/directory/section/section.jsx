import React from 'react';
import {withRouter} from 'react-router-dom';
import './section.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../../redux/user/user.selectors';

const Section = ({title,imageUrl,size, history, match,link, currentUser}) => (
    <div className={`${size} section`} onClick={() => history.push(`${match.url}${link}`)}>
       <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}/>
            <div className="content">
                <h1 className="title">{title}</h1>
            </div>
        </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(Section));