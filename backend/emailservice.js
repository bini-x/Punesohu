const nodemailer = require("nodemailer");
require("dotenv").config();

const transportuesi = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const dergoKodin = async (emailPerdoruesit, kodi) => {
  await transportuesi.sendMail({
    from: `"Punesohu" <punesohu.info@gmail.com>`,
    to: emailPerdoruesit,
    subject: "Verifiko Email-in",
    html: `<h1>Kodi i juaj ${kodi}</h1>`,
  });
};

module.exports = dergoKodin;
