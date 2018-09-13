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

    const mailOptions = {
      from: 'noreply.garycooper@gmail.com',
      to: postBody.email,
      subject: 'Thank You for your interest!',
      text: '',
      html: `<hr>
            <h2>Letter from ${postBody.firstName} ${postBody.lastName}</h2>
            <p>Organization: ${postBody.organization}</p>
            <p>Location: ${postBody.city}, ${postBody.state}, ${postBody.country}</p>
            <p>Phone: ${postBody.phone}</p>
            <p><b>Received:</b> ${postBody.date}</p>
            <p><b>Message:</b> ${postBody.comment}</p>
            <hr>
            <p>Your letter has been received and will be reviewed as soon as possible.</p>
            <p>-- Gary Cooper </p>
            `
    };

    return transporter.sendMail(mailOptions);
  }

}
