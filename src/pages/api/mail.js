const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = req.body;

  const message = {
    to: "neal.grindstaff@gmail.com",
    from: "guest@nealgrindstaff.com",
    subject: "New Message!",
    text: `Name: \${body.name}\r\nEmail: \${body.email}\r\nMessage: \${body.message}`,
    html: `<p>Name: \${body.name}</p><p>Email: \${body.email}</p><p>Message: \${body.message}</p>`,
  };

  try {
    await sgMail.send(message);
    res.status(200).json({ status: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending message" });
  }
}
