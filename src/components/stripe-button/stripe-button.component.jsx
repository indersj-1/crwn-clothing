import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JfGapSFsYpubr5kJTJBc6647ssDHa9TmwECzRChWxU3j056sBEY2eDtjs6UgoabtJITAs7L0VSLKPvvvSwPUGsO00R9e4s5YQ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
