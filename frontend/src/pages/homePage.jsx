import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api'; // API instance to interact with backend
import { useAuth } from '../context/authContext'; // Authentication context, if you have one
import Landing from '../components/landing'; // Landing component for the homepage
import Card from '../components/card';
import BannerPromo from '../components/bannerPromo';
import Suscribirse from '../components/formSuscribirse';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const { user } = useAuth(); // Obtiene el usuario autenticado
    const navigate = useNavigate();

    // Carga los productos desde la API cuando se monta el componente
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await API.get('/products'); // Endpoint to get products
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    // Agrega un producto al carrito
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Navega al checkout y verifica si el usuario está autenticado
    const handleCheckout = () => {
        if (user) {
            navigate('/checkout');
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            <Landing />
            <div className='flex justify-center mb-8 p-10 '>
                <BannerPromo />
            </div>
            <div className="relative bg-gray-500 p-10 overflow-hidden">
                {/* Texto gigante de fondo */}
                <h1 className="absolute inset-0 flex  pointer-events-none select-none 
        md:text-6xl lg:text-8xl font-bold text-black/50 z-0 p-5 ">
                    OFERTAS<br/>EXPRESS
                </h1>
                {/* Cards encima del texto */}
                <div className="relative z-10">
                    <Card />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Suscribirse />
            </div>

        </>
    );
};

export default HomePage;