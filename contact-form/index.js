const nodemailer = require('nodemailer');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    console.log(req.body);
    console.log(process.env)

    // if (req.query.name || (req.body && req.body.name)) {
    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         body: "Hello " + (req.query.name || req.body.name)
    //     };
    // }
    // else {
    //     context.res = {
    //         status: 400,
    //         body: "Please pass a name on the query string or in the request body"
    //     };
    // }
    var data = req.body;

    // emailExists({ sender: process.env.USERNAME, recipient: data.email }).then(console.log)
    // console.log('Check:', check);
  
    var smtpTransport = nodemailer.createTransport({
      service: 'GMAIL',
      port: 465,
      auth: {
        user: process.env.APPSETTING_SMTPUSERNAME,
        pass: process.env.APPSETTING_SMTPPASSWORD
      }
    });

    var mailOptions = {
      from: data.email,
      to: 'mohamad.azriebakri@gmail.com',
      subject: data.subject,
      html: `<p><b>From: ${data.name}</b> <<i>${data.email}</i>></p><p>${data.message}</p><p>Best regards, ${data.name}</p>`
    };
  
    smtpTransport.sendMail(mailOptions,
    (error, response) => {
      if(error) {
        context.done(error)
      } else {

        context.done('Success!') 
      }
      smtpTransport.close();
    });
};
