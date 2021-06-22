const keys = require('../config/keys');
const express = require('express');
const router = express.Router();
const app = express()

module.exports.login = async function (req, res) {
    // const candidate = await User.findOne({name: req.body.name});
    if (candidate) {
        if (!req.query.code) { // access denied
            return;
        }
        let data = {form: {
                client_id: process.env.SLACK_CLIENT_ID,
                client_secret: process.env.SLACK_CLIENT_SECRET,
                code: req.query.code
            }};
        app.post('https://slack.com/api/oauth.access', data, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                // Get an auth token
                let oauthToken = JSON.parse(body).access_token;
                // OAuth done- redirect the user to wherever
                res.redirect('http://localhost:3000/');
            }
        })
    } else {
        res.status(500).json({
            message: 'No token!'
        })
    }
}