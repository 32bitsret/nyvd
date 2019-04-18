'use strict';

if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}
/**
 * Import Module Dependencies
 */
//=============================================================================
const
  express = require('express'),
  bParser = require('body-parser'),
  passport = require('passport'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors');
//=============================================================================
/**
 * Create Express App
 */
//=============================================================================
const app = express();

//=============================================================================
/**
 * Module variables
 */
//=============================================================================
const
  port = process.env.PORT,
  env = process.env.NODE_ENV,
  { userRoutes, profileRoutes } = require('./routes');
  
let
  db,
  dBURL;
//=============================================================================
/**
 * App config and settings
 */
//=============================================================================
// require('clarify');
app.disable('x-powered-by');
app.set('port', port);
app.set('env', env);
//=============================================================================
/**
 * dBase connection
 */
//=============================================================================
dBURL = process.env.dBURL;
console.log(process.env.NODE_ENV)
mongoose.connect(dBURL);
db = mongoose.connection;
db.on('error', function (err) {
  console.error('There was a db connection error');
  return  console.error(err.message);
});
db.once('connected', function () {
  return console.log('Successfully connected to ' + dBURL);
});
db.once('disconnected', function () {
  return console.error('Successfully disconnected from ' + dBURL);
});
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.error('dBase connection closed due to app termination');
    return process.exit(0);
  });
});
//=============================================================================
/**
 * Middleware Stack
 */
//=============================================================================
app.use(cors());
app.use(bParser.json());
app.use(bParser.urlencoded({extended: true}));
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/')));
app.set('apidoc', path.join(__dirname, 'apidoc'));
app.set('view engine', 'html');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    if (req.method === 'OPTIONS') {
      res.status(200).end();
    }
    else {
      next();
    }
});
//=============================================================================
/**
 * Routes
 */
//=============================================================================
app.get('/test', function (req, res) {
  return res.status(200).
    send('Welcome to test route');
});


app.post('/pyc/upload', async function (req, res, next) {
  console.log(req.headers)
  let fileName = req.body.name;
  let buffer = Buffer.from(req.body.photo, 'base64');
  try {
    const data = await uploadToS3(buffer, fileName);
    return res.status(200).send(data);
  } 
  catch (error) {
    return res.status(400).send(error);
  }
});


app.use(passport.initialize());
passport.serializeUser((user, done) => {
  done(null, user);
})
app.use('/pyc', userRoutes);
app.use('/pyc', profileRoutes);

app.get('/apidoc', function(req, res) {
  res.render("index")
});
//=============================================================================
/**
 * Custom Error Handler
 */
//=============================================================================
app.use(function (err, req, res, next) {
  console.error(err.stack);
  return res.status(500).json('An error occured');
});
//=============================================================================
/**
 * Export Module
 */
//=============================================================================
module.exports = app;
//=============================================================================