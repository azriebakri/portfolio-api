const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    console.log(req.body);
    console.log(process.env)

    var data = req.body;

    sgMail.setApiKey(process.env.APPSETTING_SENDGRID_API_KEY);
    const msg = {
      to: 'mohamad.azriebakri@gmail.com',
      from: data.email,
      subject: data.subject,
      html: `<p><b>From: ${data.name}</b> <<i>${data.email}</i>></p><p>${data.message}</p><p>Best regards, ${data.name}</p>`,
    };

    sgMail.send(msg, (error, response) => {
      if(error) {
        context.res(error)
      } else {

        context.res('Success!') 
      }
      smtpTransport.close();
    });
};
