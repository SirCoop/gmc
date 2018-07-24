/* remember: var exports = module.exports = {}; */
const world = require('../assets/countryList');

const visitedCountries = world.visitedCountries.map(country => world.titleCase(country));

module.exports = {

    getCountryImages: function(req, res) {
        const country = req.params.name;

        if (hasBeenVisited(country)) {
            res.send('Photos Available!');      
        }
        else {
            res.send('This country is still on my bucket list.');      
        }
    
    }

}

function hasBeenVisited(country) {
    return visitedCountries.indexOf(country) > -1;    
}

