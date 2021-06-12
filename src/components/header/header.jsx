import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {makePopupVisible} from '../../redux/user/user.actions';
import { auth } from '../../firebase/firebase';

const Header = ({currentUser,openPopUp}) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            NETSURF
        </Link>
        <div className="options">
            {
                currentUser
                ?
                (<div className="option" onClick={() => auth.signOut()}>LOGOUT</div>)
                :
                (<div className="option" onClick={openPopUp}>LOGIN</div>)
            } 
            <div className="option">ABOUT US</div>  
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    openPopUp: () => dispatch(makePopupVisible())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);