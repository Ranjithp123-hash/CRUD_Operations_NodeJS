const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

// Add City API
router.post('/', cityController.addCity);

// Update City API
router.put('/:id', cityController.updateCity);

// Delete City API
router.delete('/:id', cityController.deleteCity);

// Get Cities API
router.get('/', cityController.getCities);

module.exports = router;
