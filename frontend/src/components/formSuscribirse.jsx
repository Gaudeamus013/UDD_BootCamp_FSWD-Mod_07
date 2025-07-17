import React from 'react'

const Suscribirse = () => {
  return (
    <div>
        <form className="flex flex-row items-center bg-white gap-4 border border-black rounded-lg p-8 shadow-md">
                    <h2 className="text-lg font-bold mb-4 text-center">¿Quieres recibir las últimas novedades?</h2>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 mb-4 border border-black rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="tu@email.com"
                    />
                    <button
                        type="submit"
                        className="w-60 h-10 mb-4 bg-blue-500 text-white rounded hover:bg-blue-900 transition"
                    >
                        Suscribirse!
                    </button>
                </form>
    </div>
  )
}

export default Suscribirse