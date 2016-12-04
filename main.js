'use strict'

const http = require('http')
const getList = require('./list')
const calc = require('./calc')

const options = {
  host: 'data.nashville.gov',
  path: '/resource/66wh-az4r.json'
};

const callback = function(response) {
  let str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    const data = JSON.parse(str)
    const list = getList(data)
    list.forEach(department => console.log(department, calc(data, department)))
  });
}

http.request(options, callback).end();