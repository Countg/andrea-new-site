import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendMail(req, res) {
  const { firstName, lastName, email, message } = req.body;
  try {
    await sendgrid.send({
      to: 'andrea@marketyourdream.ca',
      from: 'andrea@marketyourdream.ca',
      subject: 'Mail from the site',
      html: `<div>
      <h2>Contact info:</h2>
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      </div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendMail;
