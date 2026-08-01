const Creator = require("../models/creators");
const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendVerificationEmail(email){
   const registeredCreator = await Creator.findOne({email});
   if (!registeredCreator) {
      throw new Error('No user found')
   }
   const otp = (Math.floor(100000 + Math.random()*900000)).toString();
   registeredCreator.otp = otp;
   registeredCreator.otpExpiry = Date.now() + 60*15*1000;
   await registeredCreator.save();
 
   //console.log("SMTP config:", process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.EMAIL);
   const transporter = await nodemailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSW
    }
   });
   const newMail = {
      from: `"Merch by Lucius" <${process.env.EMAIL}>`,
      to: email,
      subject: "Your verification code",
      html: `<p>Your verification code is <strong>${otp}</strong>. It expires in 15 minutes.</p>`
   };
   try {
      const info = await transporter.sendMail(newMail);
      console.log("Email sent: " + info.response)
   } catch(error) {
      console.log("Error sending email: ", error);
      throw error
   }
}

module.exports = {sendVerificationEmail}