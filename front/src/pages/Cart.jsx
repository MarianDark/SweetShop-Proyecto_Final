import React, { useContext } from 'react';
import { SweetShopContext } from '../context/SweetShopContext';
import './Cart.css';

const Cart = () => {
    const { cart, updateCartQuantity, removeFromCart, calculateTotalPrice } = useContext(SweetShopContext);

    const handleQuantityChange = (product, quantity) => {
        updateCartQuantity(product, quantity);
    };

    const handleRemoveproduct = (product) => {
        removeFromCart(product);
    };

    const totalPrice = calculateTotalPrice();

    return (
        <div className="cart-container">
            <h2>¡Bienvenido a tu carrito de sueños dulces!</h2>
            <p>Aquí empieza tu viaje hacia un mundo de sabores exquisitos y delicias irresistibles.</p>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    <ul className="cart-product">
                        {cart.map((item) => (
                            <li key={item._id} className="cart-item">
                                <div className="cart-item-details">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-info">
                                        <p>{item.name}</p>
                                        <p>Precio: {item.price}€</p>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                                            min="1"
                                        />
                                        <button onClick={() => handleRemoveproduct(item)}>X</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p>Total: {totalPrice}€</p>
                        <button onClick={() => window.location.href = 'https://www.paypal.com'}>Pagar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

