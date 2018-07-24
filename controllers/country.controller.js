/* remember: var exports = module.exports = {}; */
const countryList = require('../assets/countryList');

module.exports = {

    getCountryImages: function(req, res) {
        console.log('req: ', req.params.name);
        console.log('countryList: ', countryList.titleCase(req.params.name));

        res.send('country works');
    
    }

}

// hasBeenVisited(country) {
//     if countryList
// }

