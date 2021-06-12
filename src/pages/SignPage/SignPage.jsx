import React from 'react';
import './SignPage.scss';
import SignIn from '../../components/sign/sign-in/sign-in';
import SignUp from '../../components/sign/sign-up/sign-up';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsExisting} from '../../redux/user/user.selectors';

const SignPage = ({existing}) => {
    return (
        <div className="sign">
         {
               existing?
               (<SignIn/>):
               (<SignUp/>)
         }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  existing: selectIsExisting
})

export default connect(mapStateToProps)(SignPage);
