const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  {
    name: "Chaqueta Aviadora Alaniz",
    price: 48990,
    description: "Chaqueta Aviadora con Piel Sintética en Interior y Cinturon acorde al diseño.",
    image: "https://cl-dam-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/cl/paris/866510/variant/680a37efc30f5c2291185a1c/images/cc8a5aa7-5201-4953-a9bd-f1e1f782253a/866510-0001-001.jpg"
  },
  {
    name: "Vestido Ash",
    price: 41993,
    description: "Vestido Corto Mujer Ash con Estampado Floral, Escote en V y Mangas Largas.",
    image: "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/prd-cl/product-medias/ac2f842f-8c4e-4a3c-bb2b-1612eb2dda15/MKITGEKVN5/MKITGEKVN5-3/1748035477598-MKITGEKVN5-3-1.jpg"
  },
  {
    name: "Parka Maui And Sons",
    price: 42390,
    description: "Parka Iconic Negro Hombre Maui And Sons",
    image: "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/prd-cl/product-medias/53dfe89b-4009-441f-8505-20f4302b7029/MK597YV3GT/MK597YV3GT-1/1743218887350-MK597YV3GT-1-0.jpg"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Productos insertados correctamente');
    process.exit();
  } catch (error) {
    console.error('Error insertando productos:', error);
    process.exit(1);
  }
}

seed();