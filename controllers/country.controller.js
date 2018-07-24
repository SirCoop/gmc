const path = require('path');

const world = require('../assets/countryList');
const countryImagesService = require('../services/country-images.service');

const visitedCountries = world.visitedCountries.map(country => world.titleCase(country));
const countries = world.countries.map(country => world.titleCase(country));

module.exports = {

    getCountryImages: function(req, res) {
        const country = req.params.name;

        const responseData = {
            data: []
        };

        if (hasBeenVisited(country)) {
            console.log('__dirname: ', __dirname);

            const directory = path.join(__dirname, `../assets/images/countries/${country}`);
            console.log('directory: ', directory);
            // fetch images
            responseData.data = countryImagesService.getImages(directory);
            
            res.send(responseData);
        }

        if (!hasBeenVisited(country)) {
            responseData.data = [];
            res.send(JSON.stringify(responseData));
        }

        /* front end should handle cases of invalid url params */      
    
    }

}

function hasBeenVisited(country) {
    return visitedCountries.indexOf(country) > -1;    
}

function isValidCountry(country) {
    return countries.indexOf(country) > -1;
}

