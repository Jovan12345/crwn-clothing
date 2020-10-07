import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HWhuuB3dwdZ1MyzyAZrEzYftcXWJV6qvYy1AbJ2DDFlVNBTSi5IfXdiypOas5jkMcFqPgDgm8LmnwAs5kMbnJhg005wZSEzhZ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'  
        description={`Your total is $${price}`}     
        amount={priceForStripe} 
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;