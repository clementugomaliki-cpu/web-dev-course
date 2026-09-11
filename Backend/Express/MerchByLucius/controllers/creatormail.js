const Creator = require("../models/creators");
const nodemailer = require("nodemailer");
const { Resend } = require("resend");
require("dotenv").config();

async function sendVerificationEmail(email) {
   const registeredCreator = await Creator.findOne({email});
   if (!registeredCreator) {
      throw new Error("No user found");
   }

   const otp = (Math.floor(100000 + Math.random() * 900000)).toString();

   try {
      if (process.env.RESEND_API_KEY) {
         const resend = new Resend(process.env.RESEND_API_KEY);
         const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

         const emailResponse = await resend.emails.send({
            from: `Merch by Lucius <${fromAddress}>`,
            to: [email],
            subject: "Your verification code",
            html: `<p>Your verification code is <strong>${otp}</strong>. It expires in 15 minutes.</p>`
         });

         if (emailResponse.error) {
            throw new Error(emailResponse.error.message || "Resend failed to send email");
         }

         registeredCreator.otp = otp;
         registeredCreator.otpExpiry = Date.now() + 60 * 15 * 1000;
         await registeredCreator.save();

         return emailResponse;
      }

      if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.EMAIL || !process.env.PASSW) {
         throw new Error("SMTP configuration is incomplete");
      }

      const smtpPort = Number(process.env.SMTP_PORT);
      if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
         throw new Error("SMTP_PORT must be a valid port number");
      }

      const transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: smtpPort,
         secure: smtpPort === 465,
         auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSW
         },
         tls: { rejectUnauthorized: false }
      });

      const info = await transporter.sendMail({
         from: `"Merch by Lucius" <${process.env.EMAIL}>`,
         to: email,
         subject: "Your verification code",
         html: `<p>Your verification code is <strong>${otp}</strong>. It expires in 15 minutes.</p>`
      });

      registeredCreator.otp = otp;
      registeredCreator.otpExpiry = Date.now() + 60 * 15 * 1000;
      await registeredCreator.save();

      return info;
   } catch (error) {
      console.log("Error sending verification email:", error);
      throw error;
   }
}

module.exports = {sendVerificationEmail};