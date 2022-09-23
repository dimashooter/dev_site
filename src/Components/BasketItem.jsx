import React from 'react';
import { useCartContext } from '../Context';
import { formatCurrency } from '../hooks/convertCurrency';

const BasketItem = ({ item }) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useCartContext();
  const q = getItemQuantity(item.id);
  return (
    <div className="basket__item">
      <span className='basket__count'>{q}</span>
      {item.name}
      <span>{formatCurrency(q * item.price)}</span>
      <button className='changeQuantity__btn' onClick={() => increaseCartQuantity(item.id)}>+</button>
      <button className='changeQuantity__btn' onClick={() => decreaseCartQuantity(item.id)}>-</button>
      <button className="delete__item" onClick={() => removeFromCart(item.id)}>
        delete
      </button>
    </div>
  );
};

export default BasketItem;
