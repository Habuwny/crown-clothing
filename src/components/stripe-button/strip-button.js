import React from 'react'

import StripeCheckout from 'react-stripe-checkout'




const Checkout = ({price}) => {



    const PriceAmount = price * 100;
    const KEY = 'pk_test_qDDWzOcdTwov0EvCz6AmMnG3005EtJ7opG'

    return (
            <StripeCheckout
                label={'Pay Now'}
                name={'CRWN Clothing Ltd.'}
                billingAddress
                shippingAddress
                amont={PriceAmount}
                image={'https://svgshare.com/i/CUz.svg'}
                description={`Yout total Payment is $${price}`}
                panelLabel={'Pay Now'}
                token={() => alert('Payment Success')}
                stripeKey={KEY}
                
            />

    )
};

export default Checkout;