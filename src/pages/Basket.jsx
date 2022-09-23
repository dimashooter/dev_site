import React from 'react';
import { useNavigate } from 'react-router-dom';
import BasketItem from '../Components/BasketItem';
import { useCartContext } from '../Context';
import { formatCurrency } from '../hooks/convertCurrency';

const Basket = () => {
	const { basket, basketPrice } = useCartContext();
	const nav = useNavigate();
	if (basket.length <= 0) {
		return (
			<div className="container" data="test">
				<h2 className='clearBasket_h2'>Oops basket is empty now</h2>
				<img src="./assets/empty-cart.jpg" />
				<button onClick={() => nav(-1)} class="clearBasket_btn">Buy some stuff</button>
			</div>
		);
	}

	return (
		<div className="container">
			<div className="basket__wrapper">
				<h2>Заказаные товары:</h2>

				{basket?.map(item => (
					<BasketItem item={item} />
				))}
				{basketPrice === 0 ? '' : <h3 style={{ padding: '20px' }}>Total Price:{formatCurrency(basketPrice)}</h3>}
			</div>
		</div>
	);
};

export default Basket;
