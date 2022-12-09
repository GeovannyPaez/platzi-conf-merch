import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/Payment.css';
import { useNavigate } from 'react-router-dom';
function Payment() {
  console.log('payment');
  const navigate = useNavigate();
  const {
    state: { cart },
    buyer,
    addNewOrder,
  } = useContext(AppContext);
  const paypalOptions = {
    clientId:
      'AUpf3QnqBTUP9NmYEIOoS-Ui3iQezh68w6WDG0L7dlmToHIhdpCXEyljiPDtPveFTN59qJUgGMKkRqld',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    style: {
      layout: 'vertical',
      color: 'blue',
      shape: 'rect',
      label: 'paypal',
    },
  };
  const priceTotal = () => {
    // const prices = cart.map((i) => i.price);
    const sumTotal = cart.reduce((a, b) => a + b.price * b.countCart, 0);
    return sumTotal;
  };
  const handdlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETE') {
      const newrOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newrOrder);
      navigate('/chekout/success');
    }
  };
  return (
    <main className="Payment">
      <section className="Payment-content">
        <h3>Resultado del Pedido: </h3>
        {cart.map((i) => {
          <article className="Payment-element">
            <h4>{i.title}</h4>
            <span>$ item.price</span>
          </article>;
        })}
        <article className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={priceTotal()}
            onPaymentStart={() => console.log('event paypal')}
            onPaymentSuccess={(data) => handdlePaymentSuccess(data)}
            onPaymentError={(error) => console.log('error ', error)}
            onPaymentCancel={(data) => console.log('data cancel ', data)}
          />
        </article>
      </section>
      <aside className="Payment-sidebar"></aside>
    </main>
  );
}

export default Payment;
