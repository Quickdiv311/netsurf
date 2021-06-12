import React, {useState} from 'react';
import './sign-up.scss';
import FormInput from '../../common/FormInput/FormInput';
import CustomButton from '../../common/CustomButton/CustomButton';
import {auth,createUserProfile} from '../../../firebase/firebase';
import {connect} from 'react-redux';
import {goToSignIn} from '../../../redux/user/user.actions';
import {makePopupVisible} from '../../../redux/user/user.actions';

const SignUp = ({dispatch}) => {
  
const [userCreds, setCreds] = useState({email: '',displayName: '', password: '', confirmPassword: ''});
const {email,displayName,password,confirmPassword} = userCreds;

const handleSubmit = async event => {
    event.preventDefault();
    dispatch(makePopupVisible());

    if(password !== confirmPassword)
    {
        alert("passwords do not match");
        return;
    }

    try
    {
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfile(user,{displayName});
        setCreds({email: '',displayName: '',password: '',confirmPassword: ''});
    }
    catch(e)
    {
        console.log(e);
    }
}

const handleChange = event => {
   const {name,value} = event.target;
   setCreds({...userCreds,[name]: value});
}

    return (
        <div className="sign-up">
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="heading">
                <h1>SIGN UP</h1>
                <CustomButton IsCross onClick={() => dispatch(makePopupVisible())}>X</CustomButton>
                </div>
               <FormInput name="displayName" type="text" value={displayName} handleChange={handleChange} label="Display Name" required/>
               <FormInput name="email" type="email" value={email} handleChange={handleChange} label="Email" required/>
               <FormInput name="password" type="password" value={password} handleChange={handleChange} label="Password" required/>
               <FormInput name="confirmPassword" type="password" value={confirmPassword} handleChange={handleChange} label="Confirm Password" required/>
               <div className="buttons">
               <CustomButton type="submit">SIGN UP</CustomButton>
               <CustomButton onClick={() => dispatch(goToSignIn())}>Already a user</CustomButton>
               </div>    
            </form>
        </div>
    )
}

export default connect(null)(SignUp);
