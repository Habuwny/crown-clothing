import React, {Component} from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/CustomButton'
import {auth, creaateUserProfileDocument} from "../../firebase/firebase";

import './SignUp.scss'

class SingUp extends Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword:''
    };

    handleSubmit = async e =>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return ;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            creaateUserProfileDocument(user, {displayName})

            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword:''
                }
            )

        } catch (e) {
            console.log(e);
        }
    };

    handleChange = e => {
        const  {name, value} = e.target

        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className={'sign-up'}>
                <h2 className={'title'}> I do not have an account </h2>
                <span>Sign up with your email and password</span>
                <form className={'sign-up-form'} onSubmit={this.handleSubmit}>
                    <FormInput
                        type={'text'}
                        name={'displayName'}
                        value={displayName}
                        handeChange={this.handleChange}
                        label={'Display Name'}
                        required
                        >
                    </FormInput>
                    <FormInput
                        type={'email'}
                        name={'email'}
                        value={email}
                        handeChange={this.handleChange}
                        label={'Email'}
                        required
                        >
                    </FormInput>
                    <FormInput
                        type={'password'}
                        name={'password'}
                        value={password}
                        handeChange={this.handleChange}
                        label={'Password'}
                        required
                        >
                    </FormInput>
                    <FormInput
                        type={'password'}
                        name={'confirmPassword'}
                        value={confirmPassword}
                        handeChange={this.handleChange}
                        label={'Confirm Password'}
                        required
                        >
                    </FormInput>
                    <CustomButton type={'submit'}>SIGN UP</CustomButton>


                </form>

            </div>
        );
    }
}

export default SingUp;