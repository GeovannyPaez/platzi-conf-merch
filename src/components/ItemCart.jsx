import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import{GoDiffAdded}from 'react-icons/go';
import{GoDiffRemoved}from 'react-icons/go';


function ItemCart({ cart, removeFromCar, addToCar,removeOneCount}) {
  const onDeleteToCar = () => {
    removeFromCar(cart);
  };
  const onSubtractItem=()=>{
    removeOneCount(cart)
  }
  const onAddItem=()=>{
    addToCar(cart)
  }
  return (
    <>
      <div className="Checkout-element">
        <h4>{cart.title}</h4>
        <div className="Checkout-countItems">
            {cart.countCart> 0 &&<GoDiffRemoved title='remove' cursor={'pointer'} onClick={onSubtractItem}/>}
                <p>{cart.countCart}</p>
            <GoDiffAdded title='add'cursor={'pointer'} onClick={onAddItem}/>
        </div>
        <div className="priceAndDelete">
          <span>${cart.price}</span>
          <button type="button" onClick={onDeleteToCar}>
            <AiFillDelete title="Delete" size={'1.5em'} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCart;
