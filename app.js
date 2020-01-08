var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = 1287;
const nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: 'youremail@gmail.com',
            pass: 'your password'
    }
})
const mailOptions = {
    from: 'youremail@gmail.com', // sender address
    to: 'sampreeth555@gmail.com', // list of receivers can be sent by appending comma after each email address
    subject: 'Subject of your email', // Subject line
    text: 'email from express'
};
sender.sendMail(mailOptions, ((err, res) => {
    if (err) {
        console.log('err::', err)
    }
    else {
        console.log('response', res)
    }
}))

server.listen(port, (() => { console.log(`Listening to port :: ${port}`) }))