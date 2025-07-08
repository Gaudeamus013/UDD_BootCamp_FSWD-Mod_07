import React from 'react';
import AuthForm from '../components/authForm';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = React.useState('');

    const handleRegister = async (formData) => {
        try {
            const { data } = await API.post('/auth/register', formData);
            localStorage.setItem('token', data.token);
            // Guarda el usuario completo
            localStorage.setItem('user', JSON.stringify({ name: data.name, email: data.email }));
            navigate('/profile');
        } catch (error) {
            setErrorMsg('No se pudo registrar. Intenta con otro email.');
            console.error('Registration failed', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white border border-gray-400 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>
                {errorMsg && <div className="text-red-500 text-center mb-4">{errorMsg}</div>}
                <AuthForm onSubmit={handleRegister} buttonText="Registrar" showNameField={true} />
                <button
                    className="w-full mt-4 bg-gray-800/50 text-white py-2 rounded hover:bg-gray-700 transition"
                    onClick={() => navigate('/login')}
                >
                    Ya tengo cuenta
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;