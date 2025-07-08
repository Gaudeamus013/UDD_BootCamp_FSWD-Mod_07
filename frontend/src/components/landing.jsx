import React, { useState, useEffect } from 'react';

const images = [
  "https://tommychile.vtexassets.com/assets/vtex.file-manager-graphql/images/f76e7f82-a035-45f7-9262-7945a4fe1405___cdbde9ed3bbd3587285f64768551338f.webp",
  "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://www.shutterstock.com/shutterstock/photos/2447177929/display_1500/stock-photo-a-stylish-man-and-woman-striking-a-pose-together-exuding-elegance-and-charm-in-a-picturesque-2447177929.jpg",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Landing = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url('${images[current]}')`
      }}
    >
      <div className=" p-8 rounded-xl">
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
          Bienvenidos a nuestra tienda
        </h1>
      </div>
    </div>
  );
};

export default Landing;