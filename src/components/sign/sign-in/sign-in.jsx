import React,{useState} from 'react';
import './sign-in.scss';
import FormInput from '../../common/FormInput/FormInput';
import CustomButton from '../../common/CustomButton/CustomButton';
import {auth} from '../../../firebase/firebase';
import { connect } from 'react-redux';
import {makePopupVisible,goToSignIn} from '../../../redux/user/user.actions';

const SignIn = ({dispatch}) => {
    const [userCreds,setCreds] = useState({email: '',password: ''});
    const {email,password} = userCreds;

    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(makePopupVisible());
        dispatch(goToSignIn());

        try{
            await auth.signInWithEmailAndPassword(email,password);
            setCreds({email: '',password: ''})
        }catch(e)
        {
            console.log(e);
        }
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setCreds({...userCreds,[name]: value});
    }



    return (
        <div className="sign-in">
            <form onSubmit={handleSubmit}>
                <div className="heading">
                <h1>SIGN IN</h1>
                <CustomButton IsCross onClick={() => {dispatch(makePopupVisible());dispatch(goToSignIn())}}>X</CustomButton>
                </div>
            <FormInput name="email" type="email" label="Email" value={email} handleChange={handleChange} required/>
            <FormInput name="password" type="password" label="Password" value={password} handleChange={handleChange} required/>
            <div className="button">
            <CustomButton type='submit'>SIGN IN</CustomButton>
            </div>
            </form>
        </div>
    )
}
  
  export default connect(null)(SignIn);
