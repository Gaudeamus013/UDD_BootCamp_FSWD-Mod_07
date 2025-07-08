import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-10">Cargando...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="mb-4">{product.description}</p>
      <h4 className="font-bold text-lg mb-2">
        {product.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
      </h4>
    </div>
  );
};

export default ProductDetail;