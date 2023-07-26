const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'bom1plzcpnl493924.prod.bom1.secureserver.net',
    secure: true,
    port: 465,
    auth: {
      user: 'cs1@fastrack.fr',
      pass: 'cs11475369',
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const { email, name, subject, content } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Please provide an email id.' });
  }

  const mailOptions = {
    from: `${name + ', ' + email || 'unknown'} <fastrackwebsite@fastrack.fr>`,
    to: 'test@fastrack.fr',
    subject: `from - ${name}, email - ${email}, subject - ${subject}`,
    html: content || 'no content',
  };

  try {
    const response = await transporter.sendMail(mailOptions);

    if (response.status >= 400) {
      const message = await response.json();
      console.log(message.error.email[0]);
      return res.status(400).json({ error: message.error.email[0] });
    }

    res.status(200).json({
      message: `email sent.`,
      error: '',
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || err.toString() });
  }
}
