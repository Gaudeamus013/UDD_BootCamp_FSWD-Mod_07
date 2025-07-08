import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-4 py-8 ">
      {/* Lado izquierdo: Imagen */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Acerca de nosotros"
          className="rounded-2xl shadow-lg w-80 h-80 object-cover"
        />
      </div>
      {/* Lado derecho: Texto */}
      <div className="md:w-1/2 md:pl-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Acerca de Nosotros</h1>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit deleniti perspiciatis, vero veritatis placeat suscipit, aperiam debitis neque aspernatur id numquam, architecto necessitatibus magni rerum dolores quod temporibus. Doloribus, cumque?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus alias ea, nostrum facilis saepe aliquam in nam, beatae obcaecati quisquam laboriosam fugiat optio? In non praesentium voluptates impedit dolorum rerum.
        </p>
      </div>
    </div>
  );
};

export default About;