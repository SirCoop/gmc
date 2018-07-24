/* remember: var exports = module.exports = {}; */
const world = require('../assets/countryList');

const visitedCountries = world.visitedCountries.map(country => world.titleCase(country));
const countries = world.countries.map(country => world.titleCase(country));

module.exports = {

    getCountryImages: function(req, res) {
        const country = req.params.name;

        console.log('country: ', country);

        const responseData = {
            data: []
        };

        if (hasBeenVisited(country)) {            
            responseData.data = [{message: 'success'}];
            res.send(JSON.stringify(responseData));
        }

        if (!hasBeenVisited(country)) {
            responseData.data = [];
            res.send(JSON.stringify(responseData));
        }
        
        if (!isValidCountry(country)) {
            res.status(400).send('Bad Request');
        }
    
    }

}

function hasBeenVisited(country) {
    return visitedCountries.indexOf(country) > -1;    
}

function isValidCountry(country) {

    return countries.indexOf(country) > -1;
}

