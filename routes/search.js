const express = require('express');
const router = express.Router();

// Route to search for medication by generic name
router.get('/', async (req, res) => {
  try {
    const { genericName } = req.query;
    const limit = req.query.limit || 10; // Default limit to 10 if not specified

    // EXAMPLE QUERY FOR MEDICATIONS SEARCH:
    // https://api.fda.gov/drug/drugsfda.json?search=openfda.generic_name:"METFORMIN"&limit=10

    // Construct the FDA API query
    const queryString = `openfda.generic_name:"${genericName}"`;

    // Construct the FDA API URL
    const apiUrl = `https://api.fda.gov/drug/drugsfda.json?search=${queryString}&limit=${limit}`;

    // Fetch data using the browser's fetch API
    const response = await fetch(apiUrl);
    const searchResults = await response.json();

    res.json(searchResults.results);
  } catch (error) {
    console.error('Error searching for medication:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
