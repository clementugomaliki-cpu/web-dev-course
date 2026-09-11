require("dotenv").config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: { user: process.env.EMAIL, pass: process.env.PASSW },
  tls: { rejectUnauthorized: false }
});
const testMail = {
  from: `"Merch by Lucius" <${process.env.EMAIL}>`,
  to: "clementugomaliki@gmail.com",
  subject: "SMTP test from MerchByLucius",
  text: "This is a direct SMTP test message."
};
transporter.sendMail(testMail, (err, info) => {
  if (err) {
    console.log("SEND_FAILED");
    console.log(err.message || err);
    process.exit(1);
  }
  console.log("SEND_OK");
  console.log(info.response || JSON.stringify(info));
  process.exit(0);
});
