'use strict';

const { start } = require('./server');
const { db } = require('./models/index');

// we first connect to the DB, then we run our server
db.sync().then(() => {
  // kickstart the server
  start(); // will start our server
}).catch(console.error);