#!/usr/bin/env node
const ghpages = require('gh-pages');

ghpages.publish('public', err => {
  if (err) console.error(err);
});
