import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CreateContextProvider = ({ children }) => {
	const [basket, setBasket] = useState([]);

	const addToCart = item => {
		setBasket(prev => [...prev, item]);
	};
	const clearBasket = () => {
		setBasket([]);
	};
	const basketPrice = basket.reduce((total, cartItem) => {
		return total + (cartItem?.price || 0) * cartItem.quantity;
	}, 0);

	function getItemQuantity(id) {
		return basket.find(item => item.id === id)?.quantity || 0;
	}
	function increaseCartQuantity(id) {
		setBasket(currItems => {
			if (currItems.find(item => item.id === id) == null) {
				return [...currItems, { id, quantity: 1 }];
			} else {
				return currItems.map(item => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	}
	function decreaseCartQuantity(id) {
		setBasket(currItems => {
			if (currItems.find(item => item.id === id)?.quantity === 1) {
				return currItems.filter(item => item.id !== id);
			} else {
				return currItems.map(item => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}
	const removeFromCart = id => {
		if (window.confirm('are u sure about this?')) {
			return setBasket(prev => {
				return prev.filter(item => item.id !== id);
			});
		} else {
			return;
		}
	};

	return (
		<CartContext.Provider
			value={{
				basket,
				basketPrice,
				clearBasket,
				removeFromCart,
				addToCart,
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};
