import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/adminPage';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import CheckoutPage from './pages/checkoutPage';
import CheckoutSuccess from './pages/checkoutSuccess';
import CheckoutCancel from './pages/checkoutCancel';
import About from './pages/about';
import Products from './pages/products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/profile';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/success" element={CheckoutSuccess} />
            <Route path="/checkout/cancel" element={CheckoutCancel} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
);

export default App;