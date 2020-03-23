import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_daCgyOHKacth4GeK8ljJhRRo00CdPdF6Nm';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment sucessful");
        }).catch(error => {
            console.log('Payment error: ', error);
            alert("Payment error. Please check if credit card provided is correct");
        })
    }

    return (
        <StripeCheckout 
            currency='PLN'
            label='Pay Now'
            name='REACT SHOP'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;