import React from 'react';

const Profile = () => {
    // Aquí puedes obtener los datos del usuario desde el contexto o localStorage
    const user = JSON.parse(localStorage.getItem('user')) || {};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white border border-gray-400 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Mi Perfil</h2>
                <div className="mb-4">
                    <span className="block text-gray-700 font-semibold mb-2">Nombre:</span>
                    <span className="block text-gray-900">{user.name || 'No disponible'}</span>
                </div>
                <div className="mb-4">
                    <span className="block text-gray-700 font-semibold mb-2">Email:</span>
                    <span className="block text-gray-900">{user.email || 'No disponible'}</span>
                </div>
                {/* Puedes agregar más datos del usuario aquí */}
            </div>
        </div>
    );
};

export default Profile;