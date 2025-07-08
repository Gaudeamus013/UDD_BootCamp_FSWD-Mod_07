import React, { useState } from 'react';

const AuthForm = ({ onSubmit, buttonText, showNameField }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {showNameField && (
                <div>
                    <label htmlFor="name" className="block mb-1 text-gray-700 font-semibold">Nombre</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>
            )}
            <div>
                <label htmlFor="email" className="block mb-1 text-gray-700 font-semibold">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
            </div>
            <div>
                <label htmlFor="password" className="block mb-1 text-gray-700 font-semibold">Contraseña</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
            >
                {buttonText}
            </button>
        </form>
    );
};

export default AuthForm;