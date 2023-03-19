const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'oleks_sheremet@meta.ua',
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmailUser = async data => {
  const mail = { ...data, from: 'oleks_sheremet@meta.ua' };
  await transport.sendMail(mail);
  return true;
};

module.exports = sendEmailUser;