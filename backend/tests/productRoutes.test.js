const request = require('supertest');
const express = require('express');

// Mock Product model
jest.mock('../models/Product', () => ({
  find: jest.fn(),
}));

const Product = require('../models/Product');
const productRoutes = require('../routes/productRoutes');

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

describe('GET /api/products', () => {
  it('returns status 200 and an array', async () => {
    Product.find.mockResolvedValue([]);
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

