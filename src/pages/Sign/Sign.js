import React from 'react'

import SignIn from '../../components/Sign-In/SignIn'
import SingUp from '../../components/Sing-Up/SingUp'

import './Sign.scss'



const Sign = props => {
    return (
        <div className={'sign'}>
            <SignIn />
            <SingUp />
        </div>
    )
};

export default Sign;