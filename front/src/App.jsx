import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import Homepage from './pages/HomePage';

import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/productos" element={<ProductList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
