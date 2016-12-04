'use strict'

const http = require('http')
const getList = require('./list')
const calc = require('./calc')

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
const options = {
  host: 'data.nashville.gov',
  path: '/resource/66wh-az4r.json'
};

const callback = function(response) {
  let str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    const data = JSON.parse(str)
    const list = getList(data)
    // console.log('list', list)
    // console.log('list', calc(data, 'DRUG TASK FORCE'))
    list.forEach(department => console.log(department, calc(data, department)))
  });
}

http.request(options, callback).end();