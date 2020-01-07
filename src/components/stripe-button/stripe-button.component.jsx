import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_daCgyOHKacth4GeK8ljJhRRo00CdPdF6Nm';

    const onToken = token => {
        console.log(token);
        alert("Payment sucessful");
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