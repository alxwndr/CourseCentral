var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/ccentral');

var routes = require('./routes/index');
var courses = require('./routes/courses');
var categories = require('./routes/categories');



