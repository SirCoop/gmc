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
      subject: 'Thank You for your interest!',
      text: '',
      html: `<hr>
            <h2>Letter from ${postBody.firstName} ${postBody.lastName}</h2>
            <p><b>Received:</b> ${postBody.date}</p>
            <p><b>Message:</b> ${postBody.comment}</p>
            <p>Your letter has been received and will be reviewed as soon as possible.</p>
            <p>-- Gary Cooper </p>
            <hr>`
    };

    transporter.sendMail(message);
  }

}
