// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = req.body;

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: 'rwcollins70@gmail.com',
    from: 'guest@collinstrumpet.com',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  try {
    await mail.send(data);
    res.status(200).json({ status: 'Good' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email', errorMessage: error.message });
  }
}

// robbiecollins47@yahoo.com
// rwcollins70@gmail.com