
var express = require('express'),
    flash = require('connect-flash'),
    body_parser = require('body-parser'),
    cookie_parser = require('cookie-parser'),
    cookie_session = require('cookie-session'),
    async = require('async'),
    less = require('less-middleware'),
    app = express();


/**
 */
app.use(flash());
app.use(body_parser());
app.use(cookie_parser());

app.set('views', __dirname + '/views');
app.use(less(__dirname + '/static', {force: true}));
app.use(express.static(__dirname + '/static'));

app.use(cookie_session({
  secret: '2f6f99e7102059d7acb40bbe4fa8cf547ea18f96'
}));


/**
 */
app.get('/', function (req, res) {

  res.redirect('/inbox');
});


/**
 */
app.get('/inbox', function (req, res) {
  res.sendfile('views/inbox.html');
});


/**
 */
app.get('/prototype', function (req, res) {

  res.render('prototype.hbs', {
    styles: [ 'prototype' ],
    title: 'Prototype Contact Sheet: Kujua Visual Layer'
  });
});

/**
 */
app.listen(3000);

