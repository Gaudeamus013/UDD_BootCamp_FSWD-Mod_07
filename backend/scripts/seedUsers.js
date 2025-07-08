const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const users = [
  {
    name: "Juan Pérez",
    email: "juan@example.com",
    password: "password123"
  },
  {
    name: "Ana García",
    email: "ana@example.com",
    password: "password456"
  },
  {
    name: "Carlos López",
    email: "carlos@example.com",
    password: "password789"
  },
    {
    name: "Gonzalo",
    email: "gonzalo@example.com",
    password: "12345678"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Hashear las contraseñas antes de insertar
    const usersHashed = await Promise.all(
      users.map(async user => ({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      }))
    );

    await User.deleteMany({});
    await User.insertMany(usersHashed);
    console.log('Usuarios insertados correctamente');
    process.exit();
  } catch (error) {
    console.error('Error insertando usuarios:', error);
    process.exit(1);
  }
}

seed();