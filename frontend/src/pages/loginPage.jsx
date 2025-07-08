import React from 'react';
import AuthForm from '../components/authForm';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = React.useState('');

const handleLogin = async (formData) => {
    try {
        const { data } = await API.post('/auth/login', formData);
        localStorage.setItem('token', data.token);
        // Guarda el usuario completo si viene en la respuesta
        if (data.name && data.email) {
            localStorage.setItem('user', JSON.stringify({ name: data.name, email: data.email }));
        }
        navigate('/');
        window.location.reload(); // Fuerza el refresco para que el navbar lea el usuario actualizado
    } catch (error) {
        setErrorMsg('Usuario o contraseña incorrectos');
        console.error('Login failed', error);
    }
};

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white border border-gray-400 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
                {errorMsg && <div className="text-red-500 text-center mb-4">{errorMsg}</div>}
                <AuthForm onSubmit={handleLogin} buttonText="Login" />
                <button
                    className="w-full mt-4 bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
                    onClick={() => navigate('/register')}
                >
                    Registrarse
                </button>
            </div>
        </div>
    );
};

export default LoginPage;