const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
const bodyParser = require('body-parser'); // to parse POST request body

const app = express();

app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/route/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/route.html'));
});

app.post('/coordinates', async (req, res) => {
    try {
        const searchText = req.body.location; // Get the location from the form
        if (!searchText) {
            return res.status(400).send('Location is required');
        }
        
        const encodedSearchText = encodeURIComponent(searchText);
        const apiKey = '6c99d3f2d8c54e66871c0d27e54fd17e';
        const url = `http://dev-api.digitransit.fi/geocoding/v1/search?text=${encodedSearchText}&size=1`;

        const response = await fetch(url, {
            headers: { 
                'digitransit-subscription-key': apiKey,
                'Content-Type': 'application/json'}
        });
        
        const data = await response.json();

        const coords = data.features[0].geometry.coordinates;
        const target_coords = {
            'lat': coords[1],
            'lon': coords[0]
        };

        const lat = target_coords.lat;
        const lon = target_coords.lon;     
        
        res.redirect(`http://localhost:3000/route/${lat}/${lon}`);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
