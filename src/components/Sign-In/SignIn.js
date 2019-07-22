import React, {Component} from 'react';

import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/CustomButton'
import './SignIn.scss'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    };

    handleSubmit = e => {
        e.preventDefault()
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

                    <CustomButton
                        type={'submit'}> Sign In
                    </CustomButton>

                </form>
            </div>
        );
    }
}

export default SignIn;