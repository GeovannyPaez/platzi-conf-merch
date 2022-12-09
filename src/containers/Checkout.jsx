import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Checkout.css';
import ItemCart from '../components/ItemCart';
function Checkout() {
  const {
    state: { cart },
    removeFromCar,
    removeOneCount,
    addToCar,
  } = useContext(AppContext);
  // console.log(cart);
  const priceTotal = () => {
    // const prices = cart.map((i) => i.price);
    const sumTotal = cart.reduce((a, b) => a + (b.price * b.countCart), 0);
    return sumTotal;
  };
  return (
    <main className="Checkout">
      <section className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de Pedidos: </h3>
        ) : (
          <h3>Sin pedidos...</h3>
        )}
        <article className="Checkout-item">
          {cart.map((c) => (
            <ItemCart
              key={c.id}
              cart={c}
              removeFromCar={removeFromCar}
              removeOneCount={removeOneCount}
              addToCar={addToCar}
            />
          ))}
        </article>
      </section>
      <aside className="Checkout-sidebar">
        <h3>Precio Total: {priceTotal()}</h3>
        <Link to={'/checkout/info'}>
          <button type="button">Continuar Pedido</button>
        </Link>
      </aside>
    </main>
  );
}
export default Checkout;
