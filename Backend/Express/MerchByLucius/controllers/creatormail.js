async function sendVerificationEmail(email){
   const registeredCreator = await Creator.findOne({email});
   if (!registeredCreator) {
      throw new Error('No user found')
   }

   if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.EMAIL || !process.env.PASSW) {
      throw new Error('SMTP configuration is incomplete')
   }

   const smtpPort = Number(process.env.SMTP_PORT);
   if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
      throw new Error('SMTP_PORT must be a valid port number')
   }

   const otp = (Math.floor(100000 + Math.random()*900000)).toString();

   const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
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

      // Only persist the OTP once we know it actually went out
      registeredCreator.otp = otp;
      registeredCreator.otpExpiry = Date.now() + 60*15*1000;
      await registeredCreator.save();

      return info
   } catch(error) {
      console.log("Error sending email: ", error);
      throw error
   }
}