// import express from 'express';
// import webpack from 'webpack';
// import path from 'path';
// import config from './webpack.config.dev';
// import open from 'open';
// import mongoose from 'mongoose';

// /* eslint-disable no-console */

// const port = process.env.PORT || 8080;
// const app = express();
// const compiler = webpack(config);

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/reactdemo');

// process.on('SIGINT', function () {
//     mongoose.connection.close(function () {
//         console.log('Mongoose default connection disconnected through app termination')
//         process.exit(0)
//     })
// })

// app.use(require('./app/routes'));

// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

// app.use(
//     '/public',
//     express.static(path.join(__dirname, 'public'), {
//         fallthrough: false
//     })
// );

// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, './src/index.html'));
// });

// app.listen(port, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`Magic is happening at ${port}`);
//     }
// });

//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/reactdemo');

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
//now we can set the route path & initialize the API
// router.get('/', function (req, res) {
//     res.json({ message: 'API Initialized!' });
// });
// //Use our router configuration when we call /api
// app.use('/api', router);
app.use(require('./app/routes'));
//starts the server and listens for requests
app.listen(port, function () {
    console.log(`api running on port ${port}`);
});