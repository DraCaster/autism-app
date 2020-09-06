import dotenv from "dotenv";
import nodemailer from "nodemailer";
import pug from "pug";

dotenv.config();

const compiledFunction = pug.compileFile("./SMTP/templateEmail.pug");
const compiledFunctionRestorePassword = pug.compileFile(
  "./SMTP/templateRestorePassword.pug"
);

const requireAuth = () => {
  return process.env.SMTP_REQUIRE_AUTH
    ? {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        auth: {
          user: process.env.SMTP_USER, // Your email id
          pass: process.env.SMTP_PASS, // Your password
        },
      }
    : {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
      };
};

const transporter = nodemailer.createTransport(requireAuth());

const createBody = (name, email, username) => {
  return compiledFunction({
    name: name,
    email: email,
    username: username,
  });
};

const createBodyRestorePassword = (name, email, URL) => {
  return compiledFunctionRestorePassword({
    name: name,
    email: email,
    URL: URL,
  });
};

exports.sendEmail = (name, email, username) => {
  // Definimos el email
  let mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: process.env.SUBJECT_MAIL,
    html: createBody(name, email, username),
  };

  // Enviamos el email
  return transporter.sendMail(mailOptions);
};

exports.sendEmailResetPassword = (name, email, token) => {
  const URL = process.env.URL_BACKEND + "/restore-password/" + token;

  // Definimos el email
  let mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: process.env.SUBJECT_MAIL,
    html: createBodyRestorePassword(name, email, URL),
  };

  // Enviamos el email
  return transporter.sendMail(mailOptions);
};
