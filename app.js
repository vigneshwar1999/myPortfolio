const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const sendMail = require('./mail');

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extend: false}));
app.use(express.json());
app.use(express.static('public'));


app.get("/", function (req, res) {
    res.render("portfolio");
});

app.post('/email', (req, res) => {

    const{fullname,email,text} = req.body;
    console.log('Data: ', req.body);

    sendMail(fullname,email,text,function(err,data) {
        if(err) {
            res.status(500).json({message: 'Internal error'});
        }
        else {
            res.json({message: 'Email sent'});
        }
    });

  
    res.json({ message: 'Message received!!!' })
});

app.listen("3000", function (req, res) {
    console.log("SERVER IS RUNNING ON 3000");
});
