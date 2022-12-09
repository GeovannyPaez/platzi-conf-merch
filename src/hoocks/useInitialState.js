import React, { useState } from 'react';
import initialState from '../initialState';

function useInitialState() {
  

  const [state, setState] = useState(initialState);
  const addToCar = (payload) => {
    const currentCart = [...state.cart];
    const beToCart = currentCart.some((i) => i.id === payload.id);
    if (beToCart) {
      const indexItem = currentCart.findIndex((i) => i.id === payload.id);
      const currentItem=currentCart[indexItem]
      const newPayload = { ...currentItem, countCart: currentItem.countCart + 1 };
      currentCart[indexItem]=newPayload;
      setState({
        ...state,
        cart: [...currentCart],
      });
    } else {
      setState({
        ...state,
        cart: [...state.cart, {...payload, countCart:1}],
      });
    }
  };
  const addNewOrder=(payload)=>{
    setState({
      ...state,
      orders:[...state.orders,payload]
    })
  }

  const removeOneCount=(payload)=>{
    const currentCart = [...state.cart];
    const beToCart = currentCart.some((i) => i.id === payload.id);
    if (beToCart) {
      const indexItem = currentCart.findIndex((i) => i.id === payload.id);
      const currentItem=currentCart[indexItem]
      const newPayload = { ...currentItem, countCart: currentItem.countCart - 1 };
      currentCart[indexItem]=newPayload;
      setState({
        ...state,
        cart: [...currentCart],
      });
    }else{
        removeFromCar(payload)
    }
  }

  const removeFromCar = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((i) => i.id !== payload.id),
    });
  };
  const addToBuyer=(payload)=>{
    setState({
      ...state,
      buyer:[...state.buyer, payload]
    });
    console.log(payload)
  }
  return [
    state,
    {
      removeFromCar,
      addToCar,
      removeOneCount,
      addToBuyer,
      addNewOrder
    },
  ];
}

export default useInitialState;
