const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); // Make sure to install node-fetch using npm install node-fetch

// Route to search for medication by generic name
router.get('/', async (req, res) => {
  try {
    const { brandName } = req.query;
    const limit = req.query.limit || 10; // Default limit to 3 if not specified

    // Construct the FDA API query
    const queryString = `products.brand_name:"${brandName}"`;

    // Construct the FDA API URL
    const apiUrl = `https://api.fda.gov/drug/drugsfda.json?search=${queryString}&limit=${limit}`;

    // Fetch data using the browser's fetch API
    const response = await fetch(apiUrl);
    const searchData = await response.json();

    // Extract relevant product information from the FDA API response, filtering out discontinued products
    const productResults = searchData.results.map((entry) => ({
      products: entry.products
        .filter((product) => product.marketing_status !== 'Discontinued')
        .map((product) => ({
          product_number: product.product_number,
          brand_name: product.brand_name,
          dosage_form: product.dosage_form,
          route: product.route,
          marketing_status: product.marketing_status,
          active_ingredients: product.active_ingredients.map((ingredient) => ({
            name: ingredient.name,
            strength: ingredient.strength,
          })),
        })),
    }));

    res.json(productResults);
  } catch (error) {
    console.error('Error searching for medication:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
