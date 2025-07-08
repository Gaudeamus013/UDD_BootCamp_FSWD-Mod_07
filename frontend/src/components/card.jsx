import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api'; // API instance to interact with backend
import { useAuth } from '../context/authContext'; // Authentication context, if you have one
// Landing component for the homepage

const Card = () => {
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
            <div className="flex flex-wrap justify-center gap-6 my-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-72 border-1 border-gray-200 hover:shadow-xl transition-shadow transition-transform duration-700 transform hover:-translate-y-4" onClick={() => navigate(`/products/${product.id}`)}
                    >
                        <p className="text-xs uppercase font-bold p-2">{product.name}</p>
                        <img
                            alt={product.name}
                            className="object-cover rounded-xl mb-4"
                            src={product.image}
                            width={220}
                            height={180}
                        />
                        <p className="text-xs ">{product.description}</p>
                        <h4 className="font-bold text-lg mb-2">{product.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h4>
                        <div className="flex gap-2 mt-2">
                            {user && (
                                <>
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                                        onClick={() => addToCart(product)}
                                        title="Agregar al carrito"
                                    >
                                        <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                    </button>
                                    <button
                                        className="bg-green-600 text-white px-6 py-2 rounded cursor-pointer"
                                        onClick={handleCheckout}
                                        title="Ir a pagar"
                                    >
                                        <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="text-center">
                <button
                    className="bg-green-600 text-white px-6 py-2 rounded mt-4"
                    onClick={handleCheckout}
                >
                    Ir al checkout
                </button>
            </div> */}
        </>
    )
}

export default Card