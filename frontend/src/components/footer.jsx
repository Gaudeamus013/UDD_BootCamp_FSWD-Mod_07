import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-sm">&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github text-xl hover:text-gray-400"></i>
          </a>
          <a href="mailto:contacto@mitienda.com" title="Email">
            <i className="fa fa-envelope text-xl hover:text-gray-400"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;