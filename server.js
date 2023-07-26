// Import required modules
const express = require('express');
const app = express();
const port = 3000; // You can choose any port number you like

// Define API endpoints
app.get('/api/products', (req, res) => {
  // Replace this with logic to fetch product data from your database
  const products = [
    { id: 1, name: 'Product 1', price: 99.99 },
    { id: 2, name: 'Product 2', price: 129.99 },
    // Add more product data as needed
  ];
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
