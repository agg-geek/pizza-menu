import pizzaData from './../data.json';
import './../public/index.css';

// App component
export default function () {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;

	return (
		<main className="menu">
			<h2>Our menu</h2>

			{numPizzas > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose from. All
						from our stone oven, all organic, all delicious.
					</p>

					<ul className="pizzas">
						{pizzas.map(pizza => (
							<Pizza pizza={pizza} key={pizza.name} />
						))}
					</ul>
				</>
			) : (
				<p>We're still working on our menu. Please come back later :)</p>
			)}
		</main>
	);
}

function Pizza({ pizza }) {
	return (
		<li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
			<img src={`img/${pizza.photoName}`} alt={pizza.name} />
			<div>
				<h3>{pizza.name}</h3>
				<p>{pizza.ingredients}</p>
				<span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;

	return (
		<footer className="footer">
			{isOpen ? (
				<Order closeHour={closeHour} openHour={openHour} />
			) : (
				<p>
					We're closed at the moment. We'll be happy to welcome you between{' '}
					{openHour}:00 and {closeHour}:00.
				</p>
			)}
		</footer>
	);
}

function Order({ openHour, closeHour }) {
	return (
		<div className="order">
			<p>
				We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
				online.
			</p>
			<button className="btn">Order</button>
		</div>
	);
}
