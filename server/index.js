const apiCallFromRequest = require('../src/adapters/callExternal')
const http = require('http')

// http proxy server to solve cors issues

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
  res.setHeader('Access-Control-Allow-Headers', '*')

  // req argument in callback to implement search

  apiCallFromRequest.callApi(req, function (response) {
    res.write(JSON.stringify(response))
    res.end()
  })
}).listen(3000)

console.log('service running on 3000 port....')
