// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

type Data = {
  msg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, name, body } = JSON.parse(req.body);

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    // host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "apikey",
      pass: SENDGRID_API_KEY,
      // user: testAccount.user, // generated ethereal user
      // pass: testAccount.pass, // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Contact Form" <${ADMIN_EMAIL}>`,
      // from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: ADMIN_EMAIL, // list of receivers
      subject: "Mail from gustavommauricio.com", // Subject line
      text: `${body} \n from ${name}, ${email}`, // plain text body
      html: `${body} \n from ${name}, ${email}`, // html body
    });

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    res.status(500).json({ msg: "Failed to send email." });
  }

  res.status(200).json({ msg: "Email sent!" });

  // sgMail
  //   .send(msg)
  //   .then((res) => {
  //     return callback(null, {
  //       statusCode: 200,
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({ msg: "Email sent" }),
  //     });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     return callback(null, {
  //       statusCode: 500,
  //       body: JSON.stringify({ msg: "Failed to send email." }),
  //     });
  //   });
}
