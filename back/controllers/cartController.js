import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('products.product');
    if (!cart) {
      return res.status(404).json({ message: 'Carrito de compra no encontrado' });
    }
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el carrito de compra' });
  }
};

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    if (!productId || !quantity || quantity < 1) {
      return res.status(400).json({ message: 'Cantidad o producto inválido' });
    }

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, products: [] });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    if (quantity > product.stock) {
      return res.status(400).json({ message: 'Cantidad de productos insuficiente' });
    }

    const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al agregar producto al carrito' });
  }
};