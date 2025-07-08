import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
    const { user, logout } = useAuth();
    console.log(user);
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav
            className={`sticky top-0 z-50 p-4 transition-all duration-300 ${isScrolled ? 'bg-gray-800/50 shadow-2xl' : 'bg-gray-800'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-15 w-15 object-contain"
                    />
                    <h1 className="text-white text-4xl font-bold">CLOTHES</h1>
                </div>
                {/* Botón hamburguesa */}
                <button
                    className="md:hidden text-white text-3xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <i className="fa fa-bars"></i>
                </button>
                {/* Menú */}
                <div className={`flex-col md:flex-row md:flex items-center space-x-0 md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'}`}>
                    <a href="/" className="text-white hover:text-gray-300 block px-4 py-2 md:p-0">Inicio</a>
                    <a href="/products" className="text-white hover:text-gray-300 block px-4 py-2 md:p-0">Productos</a>
                    <a href="/about" className="text-white hover:text-gray-300 block px-4 py-2 md:p-0">Nosotros</a>
                    {user ? (
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                            <span className="text-white block pl-4 py-2 md:p-0">Hola, {user.name}!</span>
                            <button
                                onClick={handleLogout}
                                className="text-white py-2 rounded md:inline flex items-center gap-2 cursor-pointer"
                            >
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                            </button>
                        </div>
                    ) : (
                        <a href="/login" className="text-orange-700 font-bold block px-4 py-2 md:p-0">Iniciar sesión</a>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;