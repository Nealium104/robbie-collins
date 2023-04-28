// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {ReCAPTCHA } from "react-google-recaptcha";
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  const body = JSON.parse(req.body)

  // Initialize the Google Recaptcha
  const recaptcha = new ReCaptcha({ secret: process.env.RECAPTCHA_SECRET_KEY });

  try {
    // Verify the recaptcha response
    await recaptcha.verify({ response: body.recaptcha });

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `

    const data = {
      to: 'neal.grindstaff@gmail.com',
      from: 'guest@collinstrumpet.com',
      subject: 'New Message!',
      text: message,
      html: message.replace(/\r\n/g, '<br>')
    }

    await mail.send(data);

    res.status(200).json({ status: 'Good' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Recaptcha verification failed' });
  }
}
