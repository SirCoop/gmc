const nodemailer = require('nodemailer');
const auth = require('./auth');

module.exports = {

  sendEmail: (postBody) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: auth.user,
            pass: auth.pass
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
        html: `<hr>
            <h2>Letter from ${postBody.firstName} ${postBody.lastName}</h2>
            <p>Date: ${postBody.date}</p>            
            <p>${postBody.comment}</p><hr>`
    };

    transporter.sendMail(message);
  }

}

