import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import '../styles/Header.css';
import { AppContext } from '../context/AppContext';

export default function Header() {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <header>
      <h1 className="Header-title">
        <Link to={'/'}>PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to={'/checkout'}>
          <FaShoppingBasket title="Checkout" size={'2em'} />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
}
