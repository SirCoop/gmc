const fs = require('fs');
const util = require('util');

/* beautiful async/await */
const readdir = util.promisify(fs.readdir);
// const readfile = util.promisify(fs.readFile);

module.exports = {

  sendEmail: (postBody) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'noreply.garycooper@gmail.com',
               pass: 'N0R3ply@'
           }
       });

    /* 
        postBody = {
            city: string,
            comment: string,
            country: string,
            date: string,
            email: string,
            firstName: string,
            lastName: string,
            organization: string,
            phone: string,
            state: string
        }
    */
    const message = {
        from: 'noreply.garycooper@gmail.com',
        to: postBody.email,
        subject: 'Thank you for your interest!',
        text: 'I have received your letter and will review as soon as possible.',
        html: '<p>HTML version of the message</p>'
    };

    transporter.sendMail(message);

  }

}

