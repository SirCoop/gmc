const path = require('path');

const contactService = require('../services/contact.service');

module.exports = {
  /* node's util.promisfy makes this async/await possible */
  contactMe: async function (req, res) {
    console.log('req: ', req.body);
    try {
        contactService.sendEmail();
        res.status(200).json({message: 'GMC received your message'});

    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
  }
}
