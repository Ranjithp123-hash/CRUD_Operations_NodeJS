const City = require('../models/City');

// Add City Controller
exports.addCity = async (req, res) => {
    try {
        const { name, population, country, latitude, longitude } = req.body;

        const existingCity = await City.findOne({ name });
        if (existingCity) {
            return res.status(400).json({ message: 'City name is Already Exists' });
        }

        const city = new City({ name, population, country, latitude, longitude });
        await city.save();

        res.status(201).json({ message: 'City added successfully', city });
    } catch (error) {
        res.status(500).json({ message: 'Error adding city', error });
    }
};

// Update City Controller
exports.updateCity = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;


        const city = await City.findByIdAndUpdate(id, updates, { new: true });
        
         if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }

        res.json({ message: 'City updated successfully', city });
    } catch (error) {
        res.status(500).json({ message: 'Error updating city', error });
    }
};

// Delete City Controller
exports.deleteCity = async (req, res) => {
    try {
        const { id } = req.params;

        const city = await City.findByIdAndDelete(id);
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }

        res.json({ message: 'City deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting city', error });
    }
};


// Get Cities Controller
exports.getCities = async (req, res) => {
    try {
        let { page = 1, limit = 10, filter, sort, search, projection } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        const query = {};

        if (filter) {
            const filterObj = JSON.parse(filter); 
            if (filterObj.field && filterObj.value) {
                query[filterObj.field] = filterObj.value;
            }
        }

        if (search) {
            query.name = { $regex: search, $options: 'i' };
        }

        const cities = await City.find(query)
            .select(projection)
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(limit);

        res.json({ message: 'Cities retrieved successfully', cities });

    } catch (error) {
        res.status(500).json({ message: 'Error retrieving cities', error });
    }
};
