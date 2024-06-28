import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SweetShopContext } from '../context/SweetShopContext';
import './ProductList.css';

const ProductList = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { addToCart } = useContext(SweetShopContext); // Función para añadir al carrito

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = async (categoryId) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/categories/${categoryId}/products`);
            setProducts(response.data);
            setSelectedCategory(categoryId);
        } catch (error) {
            console.error('Error fetching products by category:', error);
            // Aquí podrías manejar el error de forma adecuada, por ejemplo, mostrando un mensaje al usuario.
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product); // Agrega el producto al carrito usando el contexto
    };

    return (
        <div className="product-list-container">
            <div className="category-list">
                <h2>¡ENTRA Y DESCUBRE TODAS LAS SORPRESAS QUE HAY PARA TI!🍭</h2>
                {categories.map(category => (
                    <div key={category._id} onClick={() => handleCategoryClick(category._id)} className="category-item">
                        {category.name}
                    </div>
                ))}
            </div>
            {selectedCategory && (
                products.map(product => (
                    <div key={product._id} className="product-card">
                        <p>{product.name}</p>
                        <p>Precio: {product.price}€</p>
                        <p>Descripción: {product.description}</p>
                        <img src={product.image} alt={product.name} />
                        <button onClick={() => handleAddToCart(product)}>Añadir al Carrito</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductList;
