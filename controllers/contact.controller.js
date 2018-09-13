const contactService = require('../services/contact.service');

module.exports = {
  contactMe: async function (req, res) {
    const { body } = req;
    try {
        await contactService.sendEmail(body);
        res.status(200);
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
  }
}
