import React, { useEffect, useState } from 'react';
import API from '../api';
import Card from '../components/card';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestros productos</h1>
      <Card />
    </div>
  );
};

export default Products;