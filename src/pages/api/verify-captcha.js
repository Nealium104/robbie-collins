import fetch from "node-fetch";

export default async function verifyCaptcha(req, res) {
  const { captchaToken } = req.body;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    {
      method: "POST",
    }
  );

  const data = await response.json();

  if (data.success) {
    return true;
  } else {
    return false;
  }
}