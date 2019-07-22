import React, {Component} from 'react';

import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/CustomButton'
import {signInWithGoogle, auth} from '../../firebase/firebase'

import './SignIn.scss'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    };

    handleSubmit = async e => {
        e.preventDefault();


        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})


        }catch (e) {
            console.log(e)
        }

    };

    handleChange = e => {
      const {value, name} = e.target;

      this.setState({ [name]: value})
    };

    render() {
        return (
            <div className={'sign-in'}>
                <h2> I already have an acount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name={'email'}
                        type={'email'}
                        label={'Email'}
                        value={this.state.email}
                        handeChange={this.handleChange}
                        required
                    />

                    <FormInput
                        name={'password'}
                        type={'password'}
                        label={'Password'}
                        value={this.state.password}
                        handeChange={this.handleChange}
                        required
                    />
                    <div className={'buttons'}>
                        <CustomButton type={'submit'}> Sign In </CustomButton>
                        <CustomButton isGooglesignIn onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;