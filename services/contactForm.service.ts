import { Context } from '@azure/functions';

//sample api for post request
async function contactRequest({ req, res }: Context) {
    
  var contact = {
    from: req.body.email,
    to: 'mohamad.azriebakri@gmail.com',
    subject: req.body.subject,
    html: `<p><b>From: ${req.body.name}</b> <<i>${req.body.email}</i>></p><p>${req.body.message}</p><p>Best regards, ${req.body.name}</p>`
  };

  try {
      res.status(201).json(contact);
  } catch (error) {
      res.status(500).send(error);
  }

}

export default { contactRequest }