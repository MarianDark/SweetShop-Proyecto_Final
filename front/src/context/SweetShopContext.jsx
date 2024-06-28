import React, { createContext, useState } from 'react';

export const SweetShopContext = createContext();

export const SweetShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingproduct = cart.find(item => item._id === product._id);
        if (existingproduct) {
            setCart(cart.map(item =>
                item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const updateCartQuantity = (product, quantity) => {
        if (quantity <= 0) {
            setCart(cart.filter(item => item._id !== product._id));
        } else {
            setCart(cart.map(item =>
                item._id === product._id ? { ...item, quantity } : item
            ));
        }
    };

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item._id !== product._id));
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <SweetShopContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart, calculateTotalPrice }}>
            {children}
        </SweetShopContext.Provider>
    );
};
