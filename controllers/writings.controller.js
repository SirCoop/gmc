const writingsService = require('../services/writings.service');

module.exports = {
    /* node's util.promisfy makes this async/await possible */
    getWritingLists: async function(req, res) {
        try {
            const writingLists = await writingsService.getWritingLists();
            res.send({ data: writingLists });
        } catch (error) {
            res.send(error);
        }

        /* front end should handle cases of invalid url params */
    }
}
