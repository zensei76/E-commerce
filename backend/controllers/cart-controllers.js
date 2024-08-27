let cart = { items: [], totalItems: 0, totalPrice: 0 };

export const sendCart = (req, res) => {
	res.json(cart);
};

export const addToCart = (req, res) => {
	const product = req.body;
	const existingItem = cart.items.find((item) => item.id === product.id);

	if (existingItem) {
		existingItem.quantity += 1;
	} else {
		cart.items.push({ ...product, quantity: 1 });
	}

	updateCartTotals();
	res.json(cart);
};

export const removeFromCart = (req, res) => {
	const product = req.body;

	cart.items = cart.items.filter((item) => item.id !== product.id);

	updateCartTotals();
	res.json(cart);
};

export const clearCart = (req, res) => {
	cart = { items: [], totalItems: 0, totalPrice: 0 };
	res.json(cart);
};

export const updateCart = (req, res) => {
	const { id, quantity } = req.body;
	const item = cart.items.find((item) => item.id == id);
	if (item) {
		item.quantity = quantity;
	}
	updateCartTotals();
	res.json(cart);
};

const updateCartTotals = () => {
	cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
	cart.totalPrice = cart.items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
};
