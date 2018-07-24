const path = require('path');


const world = require('../assets/countryList');
const countryImagesService = require('../services/country-images.service');

const visitedCountries = world.visitedCountries.map(country => world.titleCase(country));
const countries = world.countries.map(country => world.titleCase(country));

module.exports = {
    /* node's util.promisfy makes this async/await possible */
    getCountryImages: async function(req, res) {
        const country = req.params.name;

        const response = {
            data: []
        };

        if (hasBeenVisited(country)) {
            const directory = path.join(__dirname, `../assets/images/countries/${country}`);
            try {
                const files = await countryImagesService.getImages(directory);
                response.data = files;
                res.send(JSON.stringify(response));
            } catch (error) {
                res.send(JSON.stringify(error));                
            }
        }

        if (!hasBeenVisited(country)) {
            response.data = [];
            res.send(JSON.stringify(response));
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

