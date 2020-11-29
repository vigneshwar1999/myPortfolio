const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();


const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN

    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (fullname, email, text, cb) => {
    const mailOptions = {
        subject: fullname,
        from: email,
        to: 'vigneshwar0406@gmail.com',
        text
    }
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;



    // Exporting the sendmail
    // module.exports = sendMail;
