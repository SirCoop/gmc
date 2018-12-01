const testimoniesService = require('../services/testimonies.service');

module.exports = {
  /* node's util.promisfy makes this async/await possible */
  getTestimoniesList: async function (req, res) {
    try {
      const testimoniesList = await testimoniesService.getTestimoniesList();
      res.send({
        data: testimoniesList
      });
    } catch (error) {
      res.send(error);
    }

    /* front end should handle cases of invalid url params */
  }
}
