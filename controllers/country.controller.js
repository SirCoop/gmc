const path = require('path');

const world = require('../assets/countryList');
const countryImagesService = require('../services/country-images.service');

const visitedCountries = world.visitedCountries.map(country => world.titleCase(country));
const countries = world.countries.map(country => world.titleCase(country));

module.exports = {
    /* node's util.promisfy makes this async/await possible */
    getImageUrls: async function(req, res) {
        const country = req.params.name;

        const response = {
            data: []
        };

        if (hasBeenVisited(country)) {
            const directory = path.join(__dirname, `../assets/images/countries/${country}`);
            const URI = `/api/country/${country}`;
            try {
                const files = await countryImagesService.getImageUrls(directory);
                /* api file paths */
                const filePaths = files.map(file => `${URI}/${file}`);
                res.send({ data: filePaths });
            } catch (error) {
                res.send(error);
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

