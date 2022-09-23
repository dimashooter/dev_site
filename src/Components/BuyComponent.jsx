import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context';
import { StarIcon } from '../static';

const BuyComponent = () => {
	const { addToCart, getItemQuantity } = useCartContext();
	const [state, setState] = useState({
		id: Date.now(),
		name: 'RAY AIR POCKET',
		price: 590,
		quantity: 1,
	});

	const quantity = getItemQuantity(state.id);

	return (
		<section className="buy">
			<div className="container">
				<h2 id="buy">{state.name}</h2>
				<div className="buy__wrapper">
					<div>
						<div className="buy__description-wrapper">
							<div className="buy__description">
								<div className="buy__description-text">
									<div className="buy__description-text--title">CLICK FINS</div>
									<div className="buy__description-text--p">Comes with two 4.5’’ Click Fins – no tools required – fit and remove in seconds</div>
								</div>
								<div className="buy__description-text">
									<div className="buy__description-text--title">REDUCED DECK PAD</div>
									<div className="buy__description-text--p">Reduced area deck pad in standing area to aid packing</div>
								</div>
								<div className="buy__description-text">
									<div className="buy__description-text--title">BACKPACK</div>
									<div className="buy__description-text--p">
										Compact Pocket backpack with easy entry zipper for board, paddle, pump and accessories (fits paddle and also regular pump)
									</div>
								</div>
								<div className="buy__description-text">
									<div className="buy__description-text--title">TOURING SHAPE</div>
									<div className="buy__description-text--p">Tried and tested shape based on our popular Ray Air 11’6’’</div>
								</div>
								<div className="buy__description-text">
									<div className="buy__description-text--title">EXTREMELY PORTABLE</div>
									<div className="buy__description-text--p">Extremely portable, the ultimate travel companion</div>
								</div>
							</div>
							<div className="buy__star">
								<span>{state.price}</span>
								<StarIcon />
							</div>
						</div>
						{quantity !== 0 ? (
							<button className="buy__btn">
								<Link to="/basket">check</Link>
							</button>
						) : (
							<button className="buy__btn" onClick={() => addToCart(state)}>
								buy
							</button>
						)}
					</div>

					<div className="buy__imgs">
						<img src="./assets/buyImage.jpg" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BuyComponent;
